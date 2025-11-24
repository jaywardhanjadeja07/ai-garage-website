# Firebase Storage Security Rules

Copy and paste these rules into your Firebase Console:
**Firebase Console** → **Storage** → **Rules** tab

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    
    // Helper function to check if user is authenticated
    function isAuthenticated() {
      return request.auth != null;
    }
    
    // Helper function to check if user owns the resource
    function isOwner(userId) {
      return isAuthenticated() && request.auth.uid == userId;
    }
    
    // Helper function to validate image file
    function isImage() {
      return request.resource.contentType.matches('image/.*');
    }
    
    // Helper function to check file size (5MB max)
    function isValidSize() {
      return request.resource.size < 5 * 1024 * 1024;
    }
    
    // User profile pictures
    match /users/{userId}/profile/{fileName} {
      allow read: if true; // Public read
      allow write: if isOwner(userId) && isImage() && isValidSize();
    }
    
    // Diagnosis images
    match /diagnoses/{diagnosisId}/{fileName} {
      allow read: if true; // Public read (for sharing with mechanics)
      allow write: if isAuthenticated() && isImage() && isValidSize();
    }
    
    // General uploads folder
    match /uploads/{fileName} {
      allow read: if true; // Public read
      allow write: if isAuthenticated() && isImage() && isValidSize();
    }
    
    // Prevent access to other paths
    match /{allPaths=**} {
      allow read, write: if false;
    }
  }
}
```

## Important Notes:

1. **File size limit**: 5MB maximum per file
2. **Image files only**: Only image/* MIME types allowed
3. **Public read access**: Uploaded files are publicly readable (for sharing)
4. **Authenticated writes**: Only logged-in users can upload

## Security Features:

- ✅ File type validation (images only)
- ✅ File size validation (5MB max)
- ✅ User-specific profile picture folders
- ✅ Authentication required for uploads
- ✅ Public read for sharing with mechanics/garages

## To Apply These Rules:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `ai-garage-website`
3. Navigate to **Storage** → **Rules**
4. Replace the existing rules with the above code
5. Click **Publish**

## Testing Rules:

After publishing, test by:
1. Try uploading a file through the FileUpload component
2. Try uploading a file > 5MB (should fail)
3. Try uploading a non-image file (should fail)
4. Verify uploaded files are accessible via their URLs
