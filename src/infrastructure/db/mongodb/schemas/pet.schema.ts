import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema({ collection: "pets", timestamps: true })
export class PetDocument extends Document {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, enum: ["F", "M"] })
  sex: string;

  @Prop({ required: true, type: String })
  age: string;

  @Prop({ required: true, enum: ["dog", "cat"] })
  species: string;

  @Prop({ type: String })
  description?: string;

  @Prop({ type: String }) //depois será required
  photo?: string;

  @Prop({ required: true, type: String, enum: ["available", "adopted"] })
  status: string;

  // 🔗 Referência ao Protetor
  @Prop({ type: Types.ObjectId, ref: "Protector", required: true })
  protector: Types.ObjectId;

  // 🔗 Referência ao Adotante (opcional)
  @Prop({ type: Types.ObjectId, ref: "Adopter", required: false })
  adopter?: Types.ObjectId;
}

export const PetSchema = SchemaFactory.createForClass(PetDocument);