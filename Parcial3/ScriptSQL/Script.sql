
create database 19100249;
use 19100249;

create table usuario
( 
    idCliente smallint not null auto_increment,
    nom varchar(40),
    telDireccion varchar(40),
    telCliente varchar(15),
    nomEquipoCliente varchar(20),
    detalleCliente varchar(50),
    PRIMARY KEY(idCliente)
);

insert into usuario(nom,telDireccion,telCliente,nomEquipoCliente,detalleCliente)
values ('Erick','Hacienda San Martin','8672316522','ASUS','El plastico de la carcasa esta deteriorada');