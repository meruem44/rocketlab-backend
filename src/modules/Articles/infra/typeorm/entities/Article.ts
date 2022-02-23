import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("articles")
class Article {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public title: string;

  @Column()
  public author: string;

  @Column()
  public thumbnail: string;

  @Column()
  public url: string;

  @Column()
  public credits: string;

  @Column()
  public category: string;

  @Column("int")
  public time_ready: number;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}

export { Article };
