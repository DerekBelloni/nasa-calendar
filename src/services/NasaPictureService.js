import { applyStyles } from "@popperjs/core";
import { AppState } from "../AppState";
import { NasaPic } from "../assets/Model/NasaPic";
import { logger } from "../utils/Logger";
import { nasaApi } from "./AxiosService";

const baseQuery = {
  api_key: 'ImFkY8xdP1LR429zGZ51EjAzJjiY8eGN6nLFe2Va',
  date: ''
}



class NasaPictureService {

  async searchImage(searchTerm) {
    baseQuery.date = searchTerm
    const res = await nasaApi.get('', { params: baseQuery })
    logger.log(res.data)
    let newPicture = new NasaPic(res.data)
    AppState.nasaPicture = newPicture


  }
}

export const nasaPictureService = new NasaPictureService();