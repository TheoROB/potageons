-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Mar 04 Octobre 2022 à 12:25
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `cdb`
--

-- --------------------------------------------------------

--
-- Structure de la table `agriculteur`
--

CREATE TABLE IF NOT EXISTS `agriculteur` (
  `idAgri` int(35) NOT NULL,
  `NomAgri` varchar(40) NOT NULL,
  `PrenomAgri` varchar(30) NOT NULL,
  `TelAgri` int(25) NOT NULL,
  `MailAgri` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `agriculteur`
--

INSERT INTO `agriculteur` (`idAgri`, `NomAgri`, `PrenomAgri`, `TelAgri`, `MailAgri`) VALUES
(0, 'BENOIT', 'BERTRAND ', 603567477, ''),
(0, '', '', 0, 'paulbernie@gmail.com');

-- --------------------------------------------------------

--
-- Structure de la table `localisation`
--

CREATE TABLE IF NOT EXISTS `localisation` (
  `adresseL` varchar(50) NOT NULL,
  `code postal` varchar(50) NOT NULL,
  `date_loc` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `localisation`
--

INSERT INTO `localisation` (`adresseL`, `code postal`, `date_loc`) VALUES
('2 rue paul bernie ', '31', '2022-10-22');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE IF NOT EXISTS `utilisateur` (
  `idUser` int(25) NOT NULL,
  `NomUser` varchar(50) NOT NULL,
  `PrenomUser` varchar(50) NOT NULL,
  `AgeUser` varchar(25) NOT NULL,
  `TelUser` int(25) NOT NULL,
  `adresseUser` varchar(50) NOT NULL,
  PRIMARY KEY (`idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
