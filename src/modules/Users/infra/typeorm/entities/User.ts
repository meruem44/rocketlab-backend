import { uploadConfig } from "@config/upload";
import { Exclude, Expose } from "class-transformer";

import {
  Entity,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public name: string;

  @Column()
  public email: string;

  @Column()
  @Exclude()
  public password: string;

  @Column()
  public avatar: string;

  @Column()
  public job: string;

  @Column()
  public bio: string;

  @Column()
  public whatsapp: string;

  @Column()
  public linkedin: string;

  @Column()
  public github: string;

  @CreateDateColumn()
  public created_at: Date;
  @Expose()
  get avatar_url(): string | null {
    if (!this.avatar) {
      return null;
    }

    switch (uploadConfig.driver) {
      case "disk":
        return `${process.env.APP_API_URL}/files/${this.avatar}`;
      case "s3":
        return `https://${uploadConfig.config.aws.bucket}.s3.amazonaws.com/${this.avatar}`;
      default:
        return null;
    }
  }
}

export { User };
