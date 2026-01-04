import { Request, Response } from 'express'
import DatasetFileService from './DatasetFile.service'
import { SendResponse } from '../../../../utils/SendResponse.utils'

/**
 * DatasetFileController - Handles file upload and processing requests.
 */
class DatasetFileController {
  /**
   * POST /api/v1/training-datasets/upload
   * Receives a file, saves metadata, and returns the file record.
   */
  public async upload(req: Request, res: Response): Promise<void> {
    try {
      if (!req.file) {
        return SendResponse.error(res, 'No file uploaded', 400)
      }

      const userId = (req as any).user?._id
      const fileRecord = await DatasetFileService.saveFileMetadata(userId, req.file)

      SendResponse.success(res, 'File uploaded successfully. You can now trigger processing.', fileRecord, 201)
    } catch (error: any) {
      SendResponse.error(res, 'File upload failed', 500, error)
    }
  }

  /**
   * POST /api/v1/training-datasets/:id/process
   * Triggers the background processing of an uploaded file.
   */
  public async process(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params
      
      // Start processing in the background
      DatasetFileService.processFile(id).catch((err) => {
        console.error(`Background processing failed for file ${id}:`, err)
      })

      SendResponse.success(res, 'Processing started in the background', { fileId: id })
    } catch (error: any) {
      SendResponse.error(res, 'Failed to start processing', 500, error)
    }
  }
}

export default new DatasetFileController()
