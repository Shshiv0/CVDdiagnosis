# Generated by Django 5.0.4 on 2024-04-13 13:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='data',
            name='age',
            field=models.TextField(default='20'),
        ),
        migrations.AlterField(
            model_name='data',
            name='ca',
            field=models.TextField(default='0'),
        ),
        migrations.AlterField(
            model_name='data',
            name='chol',
            field=models.TextField(default='155'),
        ),
        migrations.AlterField(
            model_name='data',
            name='cpt',
            field=models.TextField(default='1'),
        ),
        migrations.AlterField(
            model_name='data',
            name='exang',
            field=models.TextField(default='1'),
        ),
        migrations.AlterField(
            model_name='data',
            name='fbs',
            field=models.TextField(default='0'),
        ),
        migrations.AlterField(
            model_name='data',
            name='gender',
            field=models.TextField(default='1'),
        ),
        migrations.AlterField(
            model_name='data',
            name='oldpeak',
            field=models.TextField(default='1'),
        ),
        migrations.AlterField(
            model_name='data',
            name='restecg',
            field=models.TextField(default='0'),
        ),
        migrations.AlterField(
            model_name='data',
            name='result',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='data',
            name='slope',
            field=models.TextField(default='1'),
        ),
        migrations.AlterField(
            model_name='data',
            name='thal',
            field=models.TextField(default='1'),
        ),
        migrations.AlterField(
            model_name='data',
            name='thalach',
            field=models.TextField(default='1'),
        ),
        migrations.AlterField(
            model_name='data',
            name='trestbps',
            field=models.TextField(default='105'),
        ),
    ]
