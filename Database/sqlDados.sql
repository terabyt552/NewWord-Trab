-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema NewWord-Model
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `NewWord-Model` ;

-- -----------------------------------------------------
-- Schema NewWord-Model
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `NewWord-Model` DEFAULT CHARACTER SET utf8 ;
USE `NewWord-Model` ;

-- -----------------------------------------------------
-- Table `NewWord-Model`.`dicionario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NewWord-Model`.`dicionario` (
  `idDicionario` INT NOT NULL AUTO_INCREMENT,
  `Nome` VARCHAR(45) NOT NULL,
  `dat` DATE NOT NULL,
  `Estado` INT NOT NULL,
  PRIMARY KEY (`idDicionario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `NewWord-Model`.`DadosDicionario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NewWord-Model`.`DadosDicionario` (
  `idDadosDicionario` INT NOT NULL AUTO_INCREMENT,
  `palavra` VARCHAR(45) NOT NULL,
  `Significado` VARCHAR(500) NOT NULL,
  `dicionario_idDicionario` INT NOT NULL,
  PRIMARY KEY (`idDadosDicionario`),
  INDEX `fk_DadosDicionario_dicionario_idx` (`dicionario_idDicionario` ASC) VISIBLE,
  CONSTRAINT `fk_DadosDicionario_dicionario`
    FOREIGN KEY (`dicionario_idDicionario`)
    REFERENCES `NewWord-Model`.`dicionario` (`idDicionario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `NewWord-Model`.`dicionario`
-- -----------------------------------------------------
START TRANSACTION;
USE `NewWord-Model`;
INSERT INTO `NewWord-Model`.`dicionario` (`idDicionario`, `Nome`, `dat`, `Estado`) VALUES (DEFAULT, 'dicionario1', '00/00/0000', 1);
INSERT INTO `NewWord-Model`.`dicionario` (`idDicionario`, `Nome`, `dat`, `Estado`) VALUES (DEFAULT, 'dicionario2', '00/00/0000', 1);
INSERT INTO `NewWord-Model`.`dicionario` (`idDicionario`, `Nome`, `dat`, `Estado`) VALUES (DEFAULT, 'dicionario3', '00/00/0000', 1);
INSERT INTO `NewWord-Model`.`dicionario` (`idDicionario`, `Nome`, `dat`, `Estado`) VALUES (DEFAULT, 'dicionario4', '00/00/0000', 1);

COMMIT;

