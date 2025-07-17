
// backend/src/utils/ApiResponse.js





// class ApiResponse {
//   constructor(res) {
//     this.res = res;
//   }

//   success(data, message = "Success") {
//     return this.res.status(200).json({
//       status: "success",
//       message,
//       data,
//     });
//   }

//   error(error, message = "An error occurred") {
//     return this.res.status(500).json({
//       status: "error",
//       message,
//       error,
//     });
//   }
// }