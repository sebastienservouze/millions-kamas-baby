import { model, Schema } from "mongoose";
import { Effect } from "./effect.model";

export interface Item extends Document {
    id: number;
    name: string;
    lastPrice?: number,
    level?: number,
    category_name?: string;
    category_type?: string;
    type?: string;
    picture?: number;
    pa_cost?: number;
    last_seen_price?: number;
    benefs?: number;
    count?: number;
    ingredients?: [];
    effects?: [];
}