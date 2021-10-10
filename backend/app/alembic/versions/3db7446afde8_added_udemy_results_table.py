"""Added udemy results table

Revision ID: 3db7446afde8
Revises: f8c1f9af4dea
Create Date: 2021-10-02 06:49:44.026991

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3db7446afde8'
down_revision = 'f8c1f9af4dea'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('udemy_result',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('course_id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(), nullable=False),
    sa.Column('url', sa.String(), nullable=False),
    sa.Column('is_paid', sa.Boolean(), nullable=False),
    sa.Column('tracking_id', sa.String(), nullable=False),
    sa.Column('headline', sa.String(), nullable=False),
    sa.Column('num_subscribers', sa.Integer(), nullable=False),
    sa.Column('rating', sa.Float(), nullable=False),
    sa.Column('num_reviews', sa.Integer(), nullable=False),
    sa.Column('num_published_lectures', sa.Integer(), nullable=False),
    sa.Column('instructional_level', sa.String(), nullable=False),
    sa.Column('objectives_summary', sa.String(), nullable=False),
    sa.Column('learn_url', sa.String(), nullable=False),
    sa.Column('created', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=True),
    sa.Column('query', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_udemy_result_id'), 'udemy_result', ['id'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_udemy_result_id'), table_name='udemy_result')
    op.drop_table('udemy_result')
    # ### end Alembic commands ###