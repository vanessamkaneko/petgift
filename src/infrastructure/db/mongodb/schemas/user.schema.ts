import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ collection: "users", timestamps: true })
export class UserDocument extends Document {
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

  @Prop({ required: true, type: String, enum: ['adopter', 'protector'] })
  type: string;

  @Prop({ required: true, type: String })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(UserDocument);