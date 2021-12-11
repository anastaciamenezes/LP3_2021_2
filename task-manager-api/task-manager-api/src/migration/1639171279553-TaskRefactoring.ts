import {MigrationInterface, QueryRunner} from "typeorm";

export class TaskRefactoring1639171279553 implements MigrationInterface {
    name = 'TaskRefactoring1639171279553'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "firstName"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "age"`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "fullName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."task" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "public"."task" ADD CONSTRAINT "FK_f316d3fe53497d4d8a2957db8b9" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."task" DROP CONSTRAINT "FK_f316d3fe53497d4d8a2957db8b9"`);
        await queryRunner.query(`ALTER TABLE "public"."task" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "fullName"`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "age" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "lastName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "firstName" character varying NOT NULL`);
    }

}
