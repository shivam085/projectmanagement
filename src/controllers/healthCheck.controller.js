import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// const healthCheck = (req, res) => {
//   return res.status(200).json(
//     new ApiResponse(
//       200,
//       { message: "Server is running" },
//       "Health check successful ✅"
//     )
//   );
// };



const healthCheck = asyncHandler(async (req, res) => {
  return res.status(200).json(
    new ApiResponse(200,
      { message: "Server is running" },
      "Health check successful ✅"
    )
  );
});


export { healthCheck };
