import {config} from 'dotenv';

config();

export default {
    host: process.env.HOST || "aws.connect.psdb.cloud",
    database: process.env.DATABASE || "kueski",
    user:  "i3ztkfu5wmfn42gzcz8v",
    password: process.env.PASSWORD || "pscale_pw_7iC4QHzNClJQdWfrjbQHz15SAk2ULxhjqcm0cqCqnb5"
};