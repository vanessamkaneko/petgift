import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ collection: "adopters", timestamps: true })
export class AdopterDocument extends Document {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, unique: true, type: String })
  email: string;

  @Prop({ required: true, unique: true, type: String })
  phone: string;

  @Prop({ required: true, unique: true, type: String })
  document: string;

  @Prop({ type: String })
  photo: string;

  @Prop({ required: true, type: String })
  password: string;
}

export const AdopterSchema = SchemaFactory.createForClass(AdopterDocument);