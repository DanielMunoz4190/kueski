import {config} from 'dotenv';

config();

export default {
    host: process.env.HOST || "aws.connect.psdb.cloud",
    database: process.env.DATABASE || "kueski",
    user:  "u35vxa8sxvoifmh6w0rf",
    password: process.env.PASSWORD || "pscale_pw_AVdxd81bnTCoz8GWZEIHSjOzibAVIbumfWPyXl4Y3oJ"
};