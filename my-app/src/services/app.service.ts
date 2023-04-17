const axios = require('axios');

export class AppService {


    public async getConversionsAPI(): Promise<any> {
        const response = await axios.get('/api/conversion');
        return response.data;
    }

    public async convertAPI(converion: any) {
        const response = await axios.post(`/api/conversion`, {converion});
        return response.data;
    }

}