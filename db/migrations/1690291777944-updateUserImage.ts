import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUserImage1690291777944 implements MigrationInterface {
    name = 'UpdateUserImage1690291777944'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`image\` \`image\` varchar(255) NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`image\` \`image\` varchar(255) NOT NULL`);
    }

}
