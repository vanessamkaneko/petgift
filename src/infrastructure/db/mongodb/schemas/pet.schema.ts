import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { PetSex, PetSpecie, PetStatus } from "src/core/pet/dtos/CreatePet.dto";

@Schema({ collection: "pets", timestamps: true })
export class PetDocument extends Document {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, enum: PetSex })
  sex: PetSex;

  @Prop({ required: true, type: String })
  age: string;

  @Prop({ required: true, enum: PetSpecie })
  species: PetSpecie;

  @Prop({ type: String })
  description?: string;

  @Prop({ type: String }) //depois será required
  photo?: string;

  @Prop({ required: true, type: String, enum: PetStatus, default: PetStatus.AVAILABLE })
  status: PetStatus;

  // 🔗 Referência ao Protetor
  @Prop({ type: Types.ObjectId, ref: "Protector", required: true })
  protector: Types.ObjectId;

  // 🔗 Referência ao Adotante (opcional)
  @Prop({ type: Types.ObjectId, ref: "Adopter", required: false })
  adopter?: Types.ObjectId;
}

export const PetSchema = SchemaFactory.createForClass(PetDocument);