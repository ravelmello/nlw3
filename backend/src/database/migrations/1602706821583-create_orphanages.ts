import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1602706821583 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "orphanages",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: "name",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "latitude",
                    type: "float",

                },{
                    name: "opening_hours",
                    type: "varchar"    
                },
                {
                    name: "longitude",
                    type: "float",

                }, 
                {
                    name: "about",
                    type: "text"
                },
                {
                    name: "instructions",
                    type: "text"
                },
                {
                    name: "open_on_weekends",
                    type: "boolean",
                    default: false
                }
            ]

        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orphanages');
    }

}
