import os
import re
import requests
from urllib.parse import urlparse
import hashlib

# Configuration
PROJECT_ROOT = r"c:\tech-land-final"
CDN_IMAGES_DIR = os.path.join(PROJECT_ROOT, "public", "assets", "cdn-images")
SRC_DIR = os.path.join(PROJECT_ROOT, "src")

# Create directory for CDN images
os.makedirs(CDN_IMAGES_DIR, exist_ok=True)

# Track downloaded images
downloaded_images = {}

def get_file_extension(url):
    """Extract file extension from URL"""
    parsed = urlparse(url)
    path = parsed.path
    ext = os.path.splitext(path)[1]
    if not ext or ext == '':
        # Try to get from content-type
        return '.png'
    return ext

def download_image(url):
    """Download image from CDN and return local path"""
    if url in downloaded_images:
        return downloaded_images[url]
    
    try:
        # Create a hash of the URL for unique filename
        url_hash = hashlib.md5(url.encode()).hexdigest()[:10]
        
        # Get file extension
        ext = get_file_extension(url)
        
        # Create filename
        filename = f"cdn_{url_hash}{ext}"
        local_path = os.path.join(CDN_IMAGES_DIR, filename)
        
        # Download if not exists
        if not os.path.exists(local_path):
            print(f"Downloading: {url}")
            response = requests.get(url, timeout=10)
            response.raise_for_status()
            
            with open(local_path, 'wb') as f:
                f.write(response.content)
            print(f"  Saved to: {filename}")
        else:
            print(f"Already exists: {filename}")
        
        # Return relative path from public folder
        relative_path = f"/assets/cdn-images/{filename}"
        downloaded_images[url] = relative_path
        return relative_path
    
    except Exception as e:
        print(f"Error downloading {url}: {e}")
        return None

def process_file(filepath):
    """Process a single file to find and replace CDN URLs"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Find all image CDN URLs (common patterns)
        patterns = [
            r'https://img\.icons8\.com/[^\s\'"]+',
            r'https://cdn\.jsdelivr\.net/[^\s\'"]+',
            r'https://webstrot\.com/[^\s\'"]+\.(?:png|jpg|jpeg|gif|svg)',
        ]
        
        replacements = []
        
        for pattern in patterns:
            matches = re.finditer(pattern, content)
            for match in matches:
                url = match.group(0)
                local_path = download_image(url)
                if local_path:
                    replacements.append((url, local_path))
        
        # Apply replacements
        for old_url, new_path in replacements:
            content = content.replace(old_url, new_path)
        
        # Write back if changed
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated: {filepath}")
            return len(replacements)
        
        return 0
    
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return 0

def main():
    """Main function to process all files"""
    print("=" * 60)
    print("CDN Image Downloader and Localizer")
    print("=" * 60)
    
    total_replacements = 0
    processed_files = 0
    
    # Process all JSX files
    for root, dirs, files in os.walk(SRC_DIR):
        for file in files:
            if file.endswith(('.jsx', '.js', '.tsx', '.ts')):
                filepath = os.path.join(root, file)
                replacements = process_file(filepath)
                if replacements > 0:
                    total_replacements += replacements
                    processed_files += 1
    
    print("=" * 60)
    print(f"Summary:")
    print(f"  Files processed: {processed_files}")
    print(f"  Total images downloaded: {len(downloaded_images)}")
    print(f"  Total URL replacements: {total_replacements}")
    print(f"  Images saved to: {CDN_IMAGES_DIR}")
    print("=" * 60)
    
    # Print list of downloaded images
    if downloaded_images:
        print("\nDownloaded Images:")
        for url, local_path in downloaded_images.items():
            print(f"  {url}")
            print(f"    -> {local_path}")

if __name__ == "__main__":
    main()
