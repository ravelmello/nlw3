import {Request, Response} from 'express';
import Orphanage from '../models/Orphanage';

import { getRepository } from 'typeorm';
import orphanages_view from '../views/orphanages_view';

import * as Yup from  'yup';

export default {

    async create(req: Request, res: Response){
        
    const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    } = req.body;


    const orphanageRepository = getRepository(Orphanage);

    const requestImages = req.files as Express.Multer.File[];

    const images = requestImages.map(image => {
        return {path: image.filename}
    })

    const data = {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends, 
        images
    };

    const schema = Yup.object({
        name: Yup.string().required(),
        latitude: Yup.number().required(),
        longitude: Yup.number().required(),
        about: Yup.string().required().max(300),
        instructions: Yup.string().required(),
        opening_hours: Yup.string().required(),
        open_on_weekends: Yup.boolean().required(),
        images: Yup.array(Yup.object().shape({
            path: Yup.string().required(),
        }
        ))
    })

    await schema.validate(data, {
        abortEarly: false
    })

    const orphanage = orphanageRepository.create(data);

    await orphanageRepository.save(orphanage);

    return res.status(201).send({
        message: 'Successfully',
        orphanage: orphanage,
    })
    },

    async index(req: Request, res: Response){
        const orphanageRepository = getRepository(Orphanage);
        const orphanages = await orphanageRepository.find({
            relations: ['images']
        });

        return res.json(orphanages_view.renderMany(orphanages));
    },

    async show(req: Request, res: Response){
        const { id } = req.params;

        const orphanageRepository = getRepository(Orphanage);
        const orphanage = await orphanageRepository.findOneOrFail(id, {
            relations: ['images']
        });
        return res.json(orphanages_view.render(orphanage));

    }


}