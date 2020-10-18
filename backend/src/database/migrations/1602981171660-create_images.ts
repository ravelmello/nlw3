import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602981171660 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "images",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "path",
                    type: "varchar",
                },
                {
                    name: "orphanage_id",
                    type: "integer",
                }

            ],
            foreignKeys:[
                {
                    name: "ImageOrphanate",
                    columnNames: ['orphanage_id'],
                    referencedTableName: 'orphanages',
                    referencedColumnNames: ['id'],
                    onUpdate: 'cascade',
                    onDelete: 'cascade'            
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images');
    }
}
