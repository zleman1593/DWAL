var imageStore = new FS.Store.GridFS("images", {
  //mongoUrl: 'mongodb://127.0.0.1:27017/test/', // optional, defaults to Meteor's local MongoDB
  //mongoOptions: {...},  // optional, see note below
 // transformWrite: myTransformWriteFunction, //optional
  //transformRead: myTransformReadFunction, //optional
  //maxTries: 1, // optional, default 5
 // chunkSize: 1024*1024  // optional, default GridFS chunk size in bytes (can be overridden per file).
                        // Default: 2MB. Reasonable range: 512KB - 4MB
});

Images = new FS.Collection("images", {
  stores: [imageStore]
});


var imageStoreProfile = new FS.Store.GridFS("imagesProfile", {
  //mongoUrl: 'mongodb://127.0.0.1:27017/test/', // optional, defaults to Meteor's local MongoDB
  //mongoOptions: {...},  // optional, see note below
 // transformWrite: myTransformWriteFunction, //optional
  //transformRead: myTransformReadFunction, //optional
  //maxTries: 1, // optional, default 5
 // chunkSize: 1024*1024  // optional, default GridFS chunk size in bytes (can be overridden per file).
                        // Default: 2MB. Reasonable range: 512KB - 4MB
});

profileImages = new FS.Collection("imagesProfile", {
  stores: [imageStoreProfile]
});



