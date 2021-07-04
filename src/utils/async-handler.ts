import { RequestHandler, Request, Response, NextFunction } from "express"

export default function asyncHandler(callback: RequestHandler) {
	return function (req: Request, res: Response, next: NextFunction) {
		Promise.resolve(callback(req, res, next)).catch(next)
	}
}
