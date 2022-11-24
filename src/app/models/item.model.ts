import { model, Schema } from "mongoose";
import { Effect } from "./effect.model";

export interface Item {
    id: number;
    name: string;
    level?: number,
    category_name?: string;
    category_type?: string;
    type?: string;
    picture?: number;
    pa_cost?: number;
    ingredients?: [];
    effects?: [];
}

const itemSchema = new Schema<Item>({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    level: { type: Number },
    category_name: { type: String },
    category_type: { type: String },
    type: { type: String },
    picture: { type: Number },
    pa_cost: { type: Number },
    ingredients: { type: Schema.Types.Array },
    effects: { type: Schema.Types.Array },
});

const Items = model<Item>('Items', itemSchema);

export default Items;