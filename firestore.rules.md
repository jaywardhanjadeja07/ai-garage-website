# Firestore Security Rules

Copy and paste these rules into your Firebase Console:
**Firebase Console** → **Firestore Database** → **Rules** tab

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Helper function to check if user is authenticated
    function isAuthenticated() {
      return request.auth != null;
    }
    
    // Helper function to check if user owns the resource
    function isOwner(userId) {
      return isAuthenticated() && request.auth.uid == userId;
    }
    
    // User documents - users can only read/write their own data
    match /users/{userId} {
      allow read: if isOwner(userId);
      allow write: if isOwner(userId);
      
      // Prevent credit manipulation (only allow through Cloud Functions if needed)
      allow update: if isOwner(userId) && 
                     (!request.resource.data.diff(resource.data).affected Keys().hasAny(['credits', 'referralCode']));
    }
    
    // Diagnosis documents - users can only access their own diagnoses
    match /diagnoses/{diagnosisId} {
      allow read: if isAuthenticated() && resource.data.userId == request.auth.uid;
      allow create: if isAuthenticated() && request.resource.data.userId == request.auth.uid;
      allow update, delete: if isAuthenticated() && resource.data.userId == request.auth.uid;
    }
    
    // Connection test collection (remove in production!)
    match /connection_test/{testId} {
      allow read, write: if true; // For testing only - DELETE THIS RULE IN PRODUCTION
    }
  }
}
```

## Important Notes:

1. **Remove test rules** before going to production (connection_test collection)
2. **Credit manipulation** is prevented - credits should only be modified through backend/Cloud Functions
3. **User data isolation** - users can only access their own data
4. **All operations require authentication**

## To Apply These Rules:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `ai-garage-website`
3. Navigate to **Firestore Database** → **Rules**
4. Replace the existing rules with the above code
5. Click **Publish**

## Testing Rules:

After publishing, test by:
1. Logging in as a user
2. Try to access another user's data in browser console
3. Should see "permission denied" errors
