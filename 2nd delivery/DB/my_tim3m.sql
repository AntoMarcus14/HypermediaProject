-- phpMyAdmin SQL Dump
-- version 4.1.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Giu 30, 2016 alle 17:38
-- Versione del server: 5.6.29-log
-- PHP Version: 5.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `my_tim3m`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `asFAQ`
--

CREATE TABLE IF NOT EXISTS `asFAQ` (
  `Service` varchar(255) NOT NULL,
  `Question` varchar(255) NOT NULL,
  `Answer` text CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`Service`,`Question`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `asFAQ`
--

INSERT INTO `asFAQ` (`Service`, `Question`, `Answer`) VALUES
('Landline Activation', 'Which documents are necessary?', 'You must provide the following documents:\n<ul>\n<li> the identification of the owner of the line (identity card, driver''s license with a foto, passport);</li>\n<li> SSN of the owner of the line;</li>\n<li> antiabusiveness documentation;</li>\n</ul>\n \nJust in case it is not possible to present any of these documents, you will be able to produce to replace a "self-declaration in lieu of affidavit" authenticated by a notary or by the town clerk as expected from the art.4 of the 04/01/68 law and subsequent amendments and additions.'),
('Landline Activation', 'What are the different types of home phone line?', '<ul>\r\n<li> TELEPHONE LINE HOME: is a traditional primary phone line for customers who do not perform professional activities headed to any component of the master household.</li>\r\n<li> TELEPHONE LINE EXTRA: is an additional phone line letterhead traditional type to the same assignee of the main line, activated in the same or another house.</li>\r\n<li> ISDN LINE: it is a primary phone line that differs from the traditional line as it includes some specific phone services.</li>\r\n<li> LINE FOR INCOMING TRAFFIC: is an additional type of traditional telephone line to a main line, which allows only to receive calls.</li>\r\n<li> FIBER OPTIC LINE: is the new line to make calls and surf the Internet thanks to the high speed of the optical fiber, to connect at the same time, high-performance Tablet PC, Smartphone and TV with more applications and devices, view videos in HD without delays or interruptions.</li>\r\n</ul>'),
('Landline Activation', 'How much does it cost to activate a home phone line?', 'The contribution for the activation of a new traditional line amounted to euro 97.60 (VAT included), except for any current promotions.\n\nWith a monthly subscription fee of euro 29 (VAT included) have the home line including unlimited calls to all national fixed and mobile (ALL VOICE).\nWith a monthly subscription fee of 19 euro (VAT included) have the home line calls valued according to consumption (VO).\n\nTo learn about the special economic treatment reserved to particular customer categories click here.'),
('Landline Activation', 'If I activate a phone line in a second home,  how much I pay for my subscription?', 'The cost of the line in a second home or in the home is equal to that provided for the main line (Offer Voice) equal to 19 euro / month (including VAT).'),
('Landline Activation', 'What is the Migration Code?', 'It is an alpha-numeric code that contains all the data needed to correctly identify your phone line and your current ADSL service (if any).\nCode Migration consists of:\n<ul>\n<li> Secret code (CS) which is formed by 3 alpha-numeric characters that distinguish your current telephone operator.</li>\n<li>Code Resource (COR), which identifies the resource to be migrated. And ''an alphanumeric string of 12 characters, but it could be shorter. Usually, this field corresponds to the phone number.</li>\n<li>Code Service (COS) that identifies the active service with your current provider.</li>\n<li>Control code is a letter and need to check the correctness of the Migration Code.</li>\n</ul>\nAlong with the Migration Code, we are providing all active telephone numbers associated with the access.\nCode Migration is a given need to fit into TIM and should be complete in all its parts. Otherwise the transition process not will fail.\nThe Code of Migration, the control code and the associated numbers are published in the last invoice you received from your current phone company or you can be received by searching the website or by contacting the Call Center shopping.\nFor more details on how to contact you can go to 187.'),
('Landline Activation', 'What is the Secret Code?', 'The Secret Code is an alphanumeric code assigned to each client, introduced and regulated by the NRA resolutions nos. 41/09 / CIR - 52/09 / CIR. The Code was established in order to prove the customer''s willingness to switch to another operator, reducing the risk of the steps is not required. And ''it composed of three alphanumeric characters, selected in a set of 200 possible combinations. TIM also has assigned to all its customers the Secret Code that comes to the same phone number, and to the Control Character (*), must be brought to an alternative telephone operator''s knowledge when the customer terminates the contract TIM.\nThe Secret Code and the control character are displayed on the invoice is in paper version and on "my account" via the Internet, you can find within the tim.it website under MyTIM Fixed to you reserved. The Secret Code and are Control Character in the first summary page of the top costs right under the "Tax Code" under "secret code."\n(*) The Character Control is an alphabetic character automatically calculated, and used to verify the accuracy of the string secret code and telephone number.'),
('MyTIM Mobile (cost check)', 'How can I register my SIM card to MyTIM Mobile?', 'Registering to MYTIM Mobile is easy and fast. You have to register your mobile line.'),
('MyTIM Mobile (cost check)', 'Guide to registration at MyTIM Mobile.', 'Click the Sign Up button and fill in by entering the user number you want to record and the security code displayed in the image. You will receive a text message (*) with a temporary code that you must enter in the appropriate field.\nYour username will be your cell phone number. You will be asked to choose a password of 8 digits and enter your email address. You will then receive an email by TIM which has as its object: Notification by www.tim.it - check email address (if you do not find in the "Inbox" occurs if it is not in the spam / junk mail box). Click on the link in the email to confirm the email address provided, and thus complete the registration process MyTIM Mobile.\nWith the same username and password you can access MyTIM Mobile also from smartphones and from APP MyTIM Mobile (wifi).\n\n(*) Make sure your phone / tablet is enabled to receive text messages, or enter, temporarily, the sim in an enabled mobile phone'),
('MyTIM Mobile (cost check)', 'I have lost my password to access to MyTIM Mobile service. How can I recover it?', 'To retrieve your password for MyTIM Mobile get sure you have your phone next to you and click on "Recover Password"'),
('MyTIM Mobile (cost check)', 'How can I modify my password?', 'If you want to change your password enter directly into MyTIM Mobile. Within the section "Your data" you can proceed to the Change Password.'),
('MyTIM Mobile (cost check)', 'How can I check my telephone traffic?', 'In MyTIM Mobile you can check the details of your calls and the related consumption. If you have a prepaid line you can check the details of the traffic from the previous day and up until the last two months of the date of the consultation and if you have a subscription, as well as checking the balance of consumption in progress billing, you can check online download the pdf of the telephone traffic made within 90 days. the expiry date of the invoice reference.');

-- --------------------------------------------------------

--
-- Struttura della tabella `assistanceService`
--

CREATE TABLE IF NOT EXISTS `assistanceService` (
  `Name` varchar(255) NOT NULL,
  `Description` text NOT NULL,
  `Image` varchar(255) NOT NULL,
  `Category` varchar(255) NOT NULL,
  `SubCategory` varchar(255) NOT NULL,
  `Highlight` tinyint(1) NOT NULL DEFAULT '0',
  `Tags` varchar(500) NOT NULL,
  `ActiveTransition` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`Name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `assistanceService`
--

INSERT INTO `assistanceService` (`Name`, `Description`, `Image`, `Category`, `SubCategory`, `Highlight`, `Tags`, `ActiveTransition`) VALUES
('Connect to internet with the mobile phone', 'Normally the sponsored mobile phone by TIM are already prepared for Internet link in a automatic way, otherwise you will have to do the service configuration procedure. Below are listed the main pass to do to understand if your mobile phone is configured:\n<ul>\n<li> if you have a TIM mobile phone, you just have to click on the Browser Internet icon;</li>\n<li> if instead you haven''t a TIM mobile phone, you just have to click on the Browser Internet icon and digit the address "wap.tim.it".</li>\n</ul>\nIf you can not link in these ways, your mobile phone has to be still configurated.\n \nYou can do it manually following the guide of specified configuartions for your device, available in the section "Online configuration", selecting from the menu the model and the brand.\nIf you don''t remember the specific model of your Smartphone or Tablet, you can verify it entering in  MyTIM Mobile. Your device will be automaticlly recognized and you can visualize brand and model.\n \nFor some models you can configure in a automatic way your mobile phone to the navigation and to MMS \nPer alcuni modelli puoi configurare in maniera automatica il tuo telefonino alla navigazione e agli MMS calling the free number 40920, option 4.', '../img/as3.png', 'Technical Support and Configuration', 'Smartphones and Tablet', 1, 'All Smartphones and Tablet', 1),
('Landline activation', 'Require the activation of a home phone line is too easy, you can:\r\n\r\n<ul> \r\n<li> request it online</li>\r\n<li> call the Service Customer at 187</li>\r\n<li> go to a TIM store</li>\r\n</ul>\r\n \r\nVerify the activation mode consulting on line the different available offerts.\r\n \r\nThe necessary data are:\r\n<ul> \r\n<li> Name and Surname</li>\r\n<li> SSN</li>\r\n<li> Home address for which you require the activation of the line</li>\r\n<li> Phone number</li>\r\n</ul>\r\n \r\nOur technical staff will contact you as soon as possible to establish an appointment for installing the phone system.', '../img/as4.jpg', 'Phoneline managing and services', 'Home Phone', 1, 'All Home Phone', 0),
('MyTIM Mobile (cost check)', 'In MyTIM Mobile you have at your disposition all the information regarding your mobile phone line.\r\n \r\nYou can have yourself always updated about the offerts that TIM has thought for you, visualize your telephone traffic, check your credit and make refills, visualize and pay online your invoice.', '../img/as2.jpg', 'Cost check and Payments', 'What you can do online', 1, 'All What you can do online', 0),
('Relocation', '', '', 'Phoneline managing and services', 'Home Phone', 0, 'All Home Phone', 0),
('All services on your sim', '', '', 'Phoneline managing and services', 'Mobile', 1, 'All Mobile', 0),
('Disable landline services', '', '', 'Phoneline managing and services', 'Home Phone', 0, 'All Home Phone', 0),
('Telephone books at home', '', '', 'Phoneline managing and services', 'Home Phone', 0, 'All Home Phone', 0),
('Passage from subscription to rechargeable', '', '', 'Phoneline managing and services', 'Mobile', 1, 'All Mobile', 0),
('Abroad with TIM', '', '', 'Phoneline managing and services', 'Mobile', 1, 'All Mobile', 0),
('MyTIM Mobile', '', '', 'Phoneline managing and services', 'What you can do online', 0, 'All What you can do online', 0),
('Fast recharge', '', '', 'Phoneline managing and services', 'What you can do online', 0, 'All What you can do online', 0),
('Purchases and shipping time', '', '', 'Phoneline managing and services', 'What you can do online', 0, 'All What you can do online', 0),
('TIM Smart', '', '', 'Phoneline managing and services', 'Need help to pass to TIM', 0, 'All Need help to pass to TIM', 0),
('How to enter in TIM with your mobile line', '', '', 'Phoneline managing and services', 'Need help to pass to TIM', 0, 'All Need help to pass to TIM', 0),
('Agreement Telecom Italia-Noverca', '', '', 'Phoneline managing and services', 'Need help to pass to TIM', 0, 'All Need help to pass to TIM', 0),
('MyTIM Landline (cost check)', '', '', 'Cost check and Payments', 'What you can do online', 0, 'All What you can do online', 0),
('My online Account', '', '', 'Cost check and Payments', 'What you can do online', 1, 'All What you can do online', 0),
('How to read online the landline invoice', '', '', 'Cost check and Payments', 'Home Phone', 0, 'All Home Phone', 0),
('How to pay online the landline invoice', '', '', 'Cost check and Payments', 'Home Phone', 1, 'All Home Phone', 0),
('SEPA (Single Euro Payments Area)', '', '', 'Cost check and Payments', 'Home Phone', 0, 'All Home Phone', 0),
('How to check your consumptions', '', '', 'Cost check and Payments', 'Mobile', 0, 'All Mobile', 0),
('Methods of payment of the mobile invoice', '', '', 'Cost check and Payments', 'Mobile', 0, 'All Mobile', 0),
('Protection threshold and data traffic block', '', '', 'Cost check and Payments', 'Mobile', 0, 'All Mobile', 0),
('Tim application store', '', '', 'Technical Support and Configuration', 'Smartphones and Tablet', 0, 'All Smartphones and Tablet', 0),
('Mail configuration', '', '', 'Technical Support and Configuration', 'Smartphones and Tablet', 0, 'All Smartphones and Tablet', 0),
('Memotel', '', '', 'Technical Support and Configuration', 'Telephone Line', 0, 'All Telephone Line', 0),
('Call notification', '', '', 'Technical Support and Configuration', 'Telephone Line', 0, 'All Telephone Line', 0),
('Telephone Line problems', '', '', 'Technical Support and Configuration', 'Telephone Line', 0, 'All Telephone Line', 0),
('Fiber first installation', '', '', 'Technical Support and Configuration', 'ADSL and Fiber', 0, 'All ADSL and Fiber', 0),
('Fiber service characteristics', '', '', 'Technical Support and Configuration', 'ADSL and Fiber', 0, 'All ADSL and Fiber', 0),
('ADSL modem configuration', '', '', 'Technical Support and Configuration', 'ADSL and Fiber', 0, 'All ADSL and Fiber', 0),
('TIMvision on TV - Errors', '', '', 'Technical Support and Configuration', 'Decoder and TV', 0, 'All Decoder and TV', 0),
('Decoder My Sky HD installation', '', '', 'Technical Support and Configuration', 'Decoder and TV', 0, 'All Decoder and TV', 0),
('Premium Online Assistance', '', '', 'Technical Support and Configuration', 'Decoder and TV', 0, 'All Decoder and TV', 0),
('Mail management', '', '', 'Technical Support and Configuration', 'Mail', 0, 'All Mail', 0),
('Address Book management', '', '', 'Technical Support and Configuration', 'Mail', 0, 'All Mail', 0),
('Profile settings', '', '', 'Technical Support and Configuration', 'Mail', 0, 'All Mail', 0),
('DNS configuration', '', '', 'Technical Support and Configuration', 'Navigation', 0, 'All Navigation', 0),
('Firewall configuration', '', '', 'Technical Support and Configuration', 'Navigation', 0, 'All Navigation', 0),
('Navigation problem', '', '', 'Technical Support and Configuration', 'Navigation', 0, 'All Navigation', 0),
('Decoder TIM Vision Assistance', '', '', 'Smart Life Assistance', 'TIM Vision', 0, '', 0),
('What is TIM Vision', '', '', 'Smart Life Assistance', 'TIM Vision', 0, '', 0),
('What I can see with TIM Vision', '', '', 'Smart Life Assistance', 'TIM Vision', 0, '', 0),
('Videostore - Best Movies selection', '', '', 'Smart Life Assistance', 'TIM Vision', 0, '', 0),
('Service Registration', '', '', 'Smart Life Assistance', 'TIM Vision', 0, '', 0),
('Username and Password recovery', '', '', 'Smart Life Assistance', 'TIM Vision', 0, '', 0),
('SOS Smartphone', '', '../img/sosSmartphone.jpg', 'Technical Support and Configuration', 'Smartphones and Tablet', 0, 'All Smartphones and Tablet', 0),
('Smartphone MAP Service', '', '../img/as1.jpg', 'Technical Support and Configuration', 'Smartphones and Tablet', 0, 'All Smartphones and Tablet', 0);

-- --------------------------------------------------------

--
-- Struttura della tabella `category`
--

CREATE TABLE IF NOT EXISTS `category` (
  `Title` varchar(255) CHARACTER SET utf8 NOT NULL,
  `PageType` varchar(255) CHARACTER SET utf8 NOT NULL,
  `Image` varchar(255) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`Title`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `category`
--

INSERT INTO `category` (`Title`, `PageType`, `Image`) VALUES
('TV & Entertainment', 'Smart Life Services', '../img/Intrattenimento.png'),
('Health and Wellness', 'Smart Life Services', '../img/salute.png'),
('Home & Family', 'Smart Life Services', '../img/casa_famiglia.png'),
('Personal Services', 'Smart Life Services', '../img/identita.png'),
('Phoneline managing and services', 'Assistance Services', '../img/gestione_linea.png'),
('Cost check and Payments', 'Assistance Services', '../img/identita.png'),
('Technical Support and Configuration', 'Assistance Services', '../img/configurazione.png'),
('Smart Life Assistance', 'Assistance Services', '../img/contenuti.png'),
('Smartphones and Telephones', 'Devices', '../img/Smartphone.png'),
('Tablet and Computers', 'Devices', '../img/ico_menu_small_prodotti.png'),
('Modems and Networking', 'Devices', '../img/Modem.png'),
('TV and Smart Living', 'Devices', '../img/TV.png'),
('Outlet', 'Devices', '../img/Outlet.png');

-- --------------------------------------------------------

--
-- Struttura della tabella `device`
--

CREATE TABLE IF NOT EXISTS `device` (
  `Name` varchar(255) NOT NULL,
  `Category` varchar(255) NOT NULL,
  `ShortDesc` text NOT NULL,
  `Description` text CHARACTER SET utf8 NOT NULL,
  `FullPrice` text CHARACTER SET utf8 NOT NULL,
  `MonthPrice` text CHARACTER SET utf8 NOT NULL,
  `Image` varchar(255) NOT NULL,
  `Image2` varchar(255) NOT NULL,
  `Image3` varchar(255) NOT NULL,
  `Color` varchar(255) NOT NULL,
  `SLServices` varchar(512) CHARACTER SET utf8 DEFAULT NULL,
  `Tags` varchar(500) DEFAULT NULL,
  `ActiveTransition` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`Name`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `device`
--

INSERT INTO `device` (`Name`, `Category`, `ShortDesc`, `Description`, `FullPrice`, `MonthPrice`, `Image`, `Image2`, `Image3`, `Color`, `SLServices`, `Tags`, `ActiveTransition`) VALUES
('Samsung Galaxy S7 Edge', 'Smartphones and Telephones', 'Android 6.0_Display 5.5"_OctaCore processor', 'Characteristics:\n<ul>\n<li> Android 6.0 Operative System</li>\n \n<li> Display 5.5"</li>\n \n<li> OctaCore (QuadCore 2.3 Ghz + QuadCore 1.6 Ghz) CPU</li>\n</ul>', '829,90', 'Pay monthly\n<h3 class="price">20,84 euro/month</h3>\nif you have TIM phone line at home\n ', '../img/s7edge1.jpg', '../img/s7edge2.jpg', '../img/s7edge3.jpg', '../img/colors.png', 'TIM Wallet_1_Well UP_1_Coupon_0_Transport_0_Fidelity Card_0', 'All Smartphones >400 Samsung Android', 1),
('Apple iPhone 6s', 'Smartphones and Telephones', 'iOS 9 and iCloud_Display Retina HD_3D Touch_12 mp iSight camera', 'Characteristics:\n<ul>\n<li> iOS 9 and iCloud</li>\n \n<li> Display Retina HD with 1334x750 px of resolution</li>\n \n<li> 3D Touch</li>\n\n<li> 12 megapixel iSight camera with Focus Pixels, True Tone Flash and Live Photos</li>\n</ul>', '789,90', 'Pay monthly (*36)\n<h3 class="price">21,94 euro/month</h3>\nif you have TIM phone line at home', '../img/iphone6s1.jpg', '../img/iphone6s2.jpg', '../img/iphone6s3.jpg', '../img/coloriPhone.png', 'TIM Wallet_1_Coupon_0_Transport_0_Fidelity Card_0', 'All iPhone >400 Apple iOS', 0),
('Samsung Galaxy TAB A 9.7', 'Tablet and Computers', 'Android 5.0_Display 9,7" TFT_Snapdragon 410 QuadCore\n ', 'Characteristics:\n<ul>\n<li> Operative System Android 5.0</li>\n \n<li> Display 9.7" TFT</li>\n\n<li> Snapdragon Processor 410 QuadCore 1.2 GHz</li>\n</ul>', '299,90', 'Pay monthly\n<h3 class="price">9,72 euro/month</h3>\nif you have TIM phone line at home', '../img/TabA1.jpg', '../img/TabA2.jpg', '../img/TabA3.jpg', '../img/TabAcolors.png', 'Tim Premium Online_0_Tim Home Connect_0', 'All Tablet 150-300 Samsung Android', 0),
('Modem Fibra', 'Modems and Networking', 'PC, Tablet, Telephone connection_Wireless navigation_Wi-Fi Band at 2.4 Ghz and 5 Ghz', 'Characteristics:\n<ul>\n<li> PC, Tablet, Telephone connection</li>\n \n<li> Wireless navigation TFT</li>\n\n<li> Wi-Fi Band at 2.4 Ghz and 5 Ghz</li>\n\n<li>Control and Managment by the 187 App</li>\n</ul>', '99', 'Pay monthly\n<h3 class="price">8,25 euro/month</h3>\nif you have TIM phone line at home', '../img/modem.jpg', 'null', 'null', '../img/colorWhiteOnly.png', 'Tim Home Connect_0', 'All Modems TIM', 0),
('Samsung Gear Fit', 'TV and Smart Living', '1.84" Curved Super AMOLED Touchscreen Display_Bluetooth 4.0 LE', 'Characteristics:\n<ul>\n<li>The advanced, curved Super AMOLED touchscreen display and interchangeable bands of Samsung Gear      Fit are designed to suit your style.\n<li>Samsung Gear Fit offers you a variety of background colours, wallpapers, and clock designs for you to   set according to your taste.\n<li>Samsung Gear Fit equips you with instant notifications of emails, SMS, incoming calls and 3rd party apps.\n<li>Compatible with:\nGALAXY S5 - GALAXY Note 3/Note II - GALAXY S4/S4 Active/S4 Zoom/S4 mini - GALAXY Note II.\n</ul>', '79,90', 'Monthly payment is not admitted', '../img/gearfit1.jpg', '../img/gearfit2.jpg', '../img/gearfit3.jpg', '../img/gearcolor.png', 'Healthwatch_0', 'All Other <150 Samsung 3G', 0),
('Huawei P9', 'Outlet', 'Android 6.0_Display 5.2" IPS FHD_12 Mp camera_Kirin 955 Processor', 'Characteristics:\n<ul>\n<li> Android 6.0 Operative System</li>\n \n<li> Display 5.2" IPS FULL HD</li>\n\n<li> 12 Mpxl Dual Flash double Camera + 08 Mpxl front Camera</li>\n\n<li> Kirin 955 Processor - Octa core (4x2.5 Ghz + 4x1.8 Ghz)</li>\n</ul>', '<h4 class="priceBarred">599,90 euro</h4>\n499,90', 'Monthly payment is not admitted', '../img/p9-1.jpg', '../img/p9-2.jpg', '../img/p9-3.jpg', '../img/p9color.png', 'Tim Wallet_1_Fidelity Card _0_Coupon_0_Transport_0', 'All Smartphones Huawei Android', 0),
('LG X Screen', 'Smartphones and Telephones', '4G LTE-NFC_Android 6.0_Display 4.93"_Snapdragon 410 CPU', '', '269,90', '', '../img/lgScreen.jpg', '', '', '', NULL, 'All Smartphones 150-300 LG Android', 0),
('LG Nexus 5X', 'Smartphones and Telephones', '4GPLUS_Display IPS 5.2"_Android 6.0_CPU 64-bit\r\n \r\n ', '', '449,90', '', '../img/lgNexus5.jpg', '', '', '', NULL, 'All Smartphones >400 LG Android', 0),
('TIM FACILE SMILE', 'Smartphones and Telephones', 'Innovative design_Graphic display_Speakerphone', '', '39,90', '', '../img/homeTel.png', '', '', '', NULL, 'All Home phones <150 Samsung Android', 0),
('Apple iPad Air 2 16 GB', 'Tablet and Computers', 'Wi-Fi + 4G LTE_Retina Display 9,7"_iOS 8_iSight Camera 8MP', '', '559,90', '', '../img/ipad.jpg', '', '', '', NULL, 'All iPad >400 Apple IOS', 0),
('Apple iPad Pro 9.7" 256 GB', 'Tablet and Computers', 'Retina Display 9,7"_A9 Chip 64 bit_Touch ID_iSight Camera 12MP', '', '1199,90', '', '../img/ipadPro.png', '', '', '', NULL, 'All iPad >400 Apple IOS', 0),
('HuaweiMediapad T1 10 LTE', 'Tablet and Computers', 'Display 9.6"_IPS_Android 4.4_Snapdragon 200 QuadCore', '', '249,90', '', '../img/huaweiT1.jpg', '', '', '', NULL, 'All Tablet 150-300 Huawei Android', 0),
('HUAWEI MediaPad 10 LINK+', 'Tablet and Computers', 'Display 10.1" IPS_Android 4.2.2 JB\r\n', '', '119,90', '', '../img/huawei10.jpg', '', '', '', NULL, 'All Tablet <150 Huawei Android', 0),
('Acer ICONIA W4 821', 'Tablet and Computers', 'Display 8" IPS_Windows 8.1 + Office Home & Students 2013', '', '299,90', '', '../img/acer.jpg', '', '', '', NULL, 'All Tablet 150-300 Windows', 0),
('TIM Modem ADSL Wi-Fi', 'Modems and Networking', 'Different devices connection_Faster Wireless navigation_No problem installation_Eco function', '', '69', '', '../img/modemAdsl.jpg', '', '', '', NULL, 'All Modems TIM', 0),
('ZyXEL Repeater Wi-Fi AC750', 'Modems and Networking', 'Wi-Fi Band at 2.4 and 5 GHz_Transmission speed up to 750 Mbps_WPS Mode', '', '49,90', '', '../img/zyxel.png', '', '', '', NULL, 'All Other ZyXEL', 0),
('TIM Modem Wi-Fi Car Pack 4G', 'Modems and Networking', 'Modem WI-FI CarPack4G_Promo PIN Code_Power supply_Car charger', '', '99,90', '', '../img/timCar.png', '', '', '', NULL, 'All Keys TIM 4G LTE', 0),
('TIMTag', 'TV and Smart Living', 'Water Proof_Provides movement alerts_Long life battery_Dimensions 49 x 47 x 17 mm', '', '129', '', '../img/timtagDev.jpg', '', '', '', NULL, 'All Other <150 TIM 4G LTE', 0),
('Decoder TIMvision', 'TV and Smart Living', 'Processor Intel ATOM_HDMI 1.3_Wireless 802.11 b/g/n (2.4GHz e 5GHz) ', '', '49', '', '../img/decoderTimvision.jpg', '', '', '', NULL, 'All Decoder <150 TIM', 0),
('D-Link Smart Home', 'TV and Smart Living', 'Modem WI-FI CarPack4G_Promo PIN Code_Power supply_Car charger', '', '159,90', '', '../img/dlinkDev.jpg', '', '', '', NULL, 'All Cameras 150-300 D-Link 4G LTE', 0),
('Apple Watch Sport 38', 'TV and Smart Living', 'Aluminum case_Reinforced glass Ion-X_Retina display with Force Touch_ Digital Crown', '', '369,90', '', '../img/appleWatch.png', '', '', '', NULL, 'All Other 300-400 Apple 3G', 0),
('HUAWEI MediaPad 10 LINK', 'Outlet', 'Display 10.1" IPS_Android 4.2.2 JB\r\n \r\n \r\n ', '', '<h4 class="priceBarred">249,90 euro</h4>119,90', '', '../img/huawei10.jpg', '', '', '', NULL, 'All Tablet Huawei Android', 0),
('TIM Powerline Adapter', 'Outlet', 'Internet up to 200 Mbps_Easy installation_Cryptography and protection of data\r\n \r\n ', '', '<h4 class="priceBarred">60 euro</h4>49', '', '../img/timPowerline.png', '', '', '', NULL, 'All Other TIM', 0),
('Sony Smart Band Fifa', 'Outlet', '250mm bracelet_Accelerometer_Gyroscope_NFC', '', '<h4 class="priceBarred">79 euro</h4>49,90', '', '../img/sonySmartband.png', '', '', '', NULL, 'All Other Sony', 0),
('Samsung Smart TV ', 'TV and Smart Living', 'Modello 50JU6400_Ultra HD 4K 3840 x 2160_Soundbar HWJ250 inclusa_TIMvision incluso', '', '1099', '', '../img/samsung_smart_tv.png', '', '', '', NULL, 'All Smart TV >400 Samsung', 0);

-- --------------------------------------------------------

--
-- Struttura della tabella `filterPanel`
--

CREATE TABLE IF NOT EXISTS `filterPanel` (
  `CategoryPage` varchar(255) NOT NULL,
  `Name1` varchar(255) DEFAULT NULL,
  `Values1` text,
  `Name2` varchar(255) DEFAULT NULL,
  `Values2` text,
  `Name3` varchar(255) DEFAULT NULL,
  `Values3` text,
  `Name4` varchar(255) DEFAULT NULL,
  `Values4` text,
  PRIMARY KEY (`CategoryPage`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `filterPanel`
--

INSERT INTO `filterPanel` (`CategoryPage`, `Name1`, `Values1`, `Name2`, `Values2`, `Name3`, `Values3`, `Name4`, `Values4`) VALUES
('Smartphones and Telephones', 'Type', 'All_Smartphones_iPhone_Home phones', 'Price', '<150_150-300_300-400_>400', 'Brand', 'Apple_Blackberry_Huawei_LG_Microsoft_Samsung', 'OS', 'Android_Blackberry_iOS_Windows'),
('Tablet and Computers', 'Type', 'All_iPad_Tablet', 'Price', '<150_150-300_300-400_>400', 'Brand', 'Acer_Apple_Huawei_Samsung', 'OS', 'Android_IOS_Windows'),
('Modems and Networking', 'Type', 'All_Other_Keys_Modems', 'Brand', 'AVM_TIM_ZyXEL', 'Connection', '3G_4G LTE_4G PLUS', NULL, NULL),
('TV and Smart Living', 'Type', 'All_Decoder_Smart TV_Cameras_Other', 'Price', '<150_150-300_300-400_>400', 'Brand', 'Apple_Beats_D-Link_Samsung_TIM', 'Connection', '3G_4G LTE'),
('Outlet', 'Type', 'All_Smartphones_Tablet_Home phones_Other', 'Brand', 'D-Link_Huawei_Olivetti_Sony_TIM', 'OS', 'Android', NULL, NULL),
('Promotions', 'Type', 'All_Devices_Smart Life Services', NULL, NULL, NULL, NULL, NULL, NULL),
('Phoneline managing and services', 'Type', 'All_Home Phone_Mobile_What you can do online_Need help to pass to TIM', NULL, NULL, NULL, NULL, NULL, NULL),
('Cost check and Payments', 'Type', 'All_What you can do online_Home Phone_Mobile', NULL, NULL, NULL, NULL, NULL, NULL),
('Technical Support and Configuration', 'Type', 'All_Smartphones and Tablet_Telephone Line_ADSL and Fiber_Decoder and TV_Mail_Navigation', NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Struttura della tabella `guidedTour`
--

CREATE TABLE IF NOT EXISTS `guidedTour` (
  `PromName` varchar(50) NOT NULL,
  `IndexCat` varchar(50) NOT NULL,
  `Prev` varchar(255) DEFAULT NULL,
  `Next` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`PromName`,`IndexCat`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `guidedTour`
--

INSERT INTO `guidedTour` (`PromName`, `IndexCat`, `Prev`, `Next`) VALUES
('Samsung Galaxy S7 Edge', 'Smartphones and Telephones', NULL, 'Apple iPhone 6s'),
('Apple iPhone 6s', 'Smartphones and Telephones', 'Samsung Galaxy S7 Edge', NULL),
('Samsung Galaxy S7 Edge', 'Promotions', NULL, 'Apple iPhone 6s'),
('Apple iPhone 6s', 'Promotions', 'Samsung Galaxy S7 Edge', 'Huawei P9'),
('Huawei P9', 'Promotions', 'Apple iPhone 6s', 'Samsung Galaxy TAB A 9.7'),
('Samsung Galaxy TAB A 9.7', 'Promotions', 'Huawei P9', NULL);

-- --------------------------------------------------------

--
-- Struttura della tabella `promotion`
--

CREATE TABLE IF NOT EXISTS `promotion` (
  `Name` varchar(255) NOT NULL,
  `PromText` text NOT NULL,
  `Image` varchar(255) DEFAULT NULL,
  `Type` varchar(255) DEFAULT NULL,
  `Active` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`Name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `promotion`
--

INSERT INTO `promotion` (`Name`, `PromText`, `Image`, `Type`, `Active`) VALUES
('Samsung Galaxy S7 Edge', 'Start Contribution 129euro\n30euro for 30 months\nwith 1000 minutes & 2GB', '../img/s7edge1.jpg', 'Devices', 1),
('Apple iPhone 6s', 'Start Contribution 129euro\n30euro for 30 months\nwith 1000 minutes & 2GB', '../img/iphone6s1.jpg', 'Devices', 1),
('Huawei P9', 'Start Contribution 99euro\r\n0euro per 30 months\r\nwith TIM Special Unlimited', '../img/p9-1.jpg', 'Devices', 1),
('Samsung Galaxy TAB A 9.7', '5euro for 30 months\r\nwith Internet 4GB', '../img/TabA1.jpg', 'Devices', 1),
('iPad Air 2S', '10euro for 30 months\r\nwith Smart 4GB Sim Plus', '../img/ipad.jpg', 'Devices', 0),
('Samsung Galaxy A5', 'Start Contribution 0euro\r\n23euro per 30 months', '../img/galaxyA5.png', 'Devices', 0),
('TIM Vision', '5 euro/month with decoder', '../img/Timvision-logo.png', 'Smart Life Services', 1),
('TIM Sky', 'Ultrafast Internet up to 100MB\r\nLandline and Mobile phone calls\r\nStarting from 39euro/month', '../img/sky.png', 'Smart Life Services', 0),
('TIM Music', '99 cent/month for the first 3 months\r\n7,99 euro/month later', '../img/tim_music1.jpg', 'Smart Life Services', 0);

-- --------------------------------------------------------

--
-- Struttura della tabella `slActivationAndRules`
--

CREATE TABLE IF NOT EXISTS `slActivationAndRules` (
  `SmartLife` varchar(255) CHARACTER SET utf8 NOT NULL,
  `FirstSubtitle` varchar(255) CHARACTER SET utf8 NOT NULL,
  `FirstDescription` text CHARACTER SET utf8 NOT NULL,
  `FirstImage` varchar(255) CHARACTER SET utf8 NOT NULL,
  `SecondSubtitle` varchar(255) CHARACTER SET utf8 NOT NULL,
  `SecondDescr` text CHARACTER SET utf8 NOT NULL,
  `Subscription` varchar(255) NOT NULL,
  PRIMARY KEY (`SmartLife`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `slActivationAndRules`
--

INSERT INTO `slActivationAndRules` (`SmartLife`, `FirstSubtitle`, `FirstDescription`, `FirstImage`, `SecondSubtitle`, `SecondDescr`, `Subscription`) VALUES
('TIM Wallet', 'What do you need :', '<ul>\r\n  <li>Tim Card NFC : In order to fully exploit all the services offered by TIM Wallet, we suggest to use a TIM Card NFC. \r\nYou have to request the card change in a TIM Store or become a customer by buying a new TIM! \r\nRemember, the payments service is only available for the TIM NFC Cards.</li>\r\n  <li>Smartphone NFC : Discover all the Smartphones that are enabled to use payment services. Check the list of compatible terminals, certified in order to ensure the safety requirements of banks and payment circuits.</li>\r\n  <li>Active Tim Wallet : Don''t forget to download the TIM Wallet app and activate it by accessing to the service at least once.</li>\r\n</ul>', '', 'How to pay :', 'Download Tim Wallet App from Google Play on an Android smartphone NFC;\r\nconnect TIM SmartPAY or add the credit card that you prefer, among those available in the showcase;\r\nduring the payment select the card you want to use, press "Pay" and move the smartphone close to contactless POS. You will receive the payment confirmation directly on your smartphone display.', ''),
('Well Up', '', 'The app is available for iOS and Android platforms. It will give you the opportunity to create a real agenda of the audits conducted periodically for themselves and for the whole family.\nDownload it now and start taking care of yourself!', '../img/apple.jpg', 'Well Up - how to use it ', 'https://www.youtube.com/embed/uqVbWfotxoM', ''),
('TIM Vision', 'Costs :', '<ul>\r\n<li>Activation cost : none </li>\r\n<li>TIM Vision promotion:</li>\r\n<ul>\r\n  <li>Catalog price : 10 euro/month</li>\r\n  <li>Promotion : 5 euro/month with decoder</li>\r\n  <li>Notes :  For all customers with TIM phone line both new and existing customers that activate TIMvision before 30/06/2016</li></ul>\r\n</ul>\r\n    \r\n', '', 'Details and promotion constraints', '<ul>\n<li>The promotion TIMvision with decoder, valid for activations before 30/06/2016, is reserved for all customers with ADSL Unlimited and TIM Fiber Optics, both new and existing customers. It includes subscription TIMvision and the decoder (rental) at a price of 5 euro / month.</li>\n<li> In case of termination of the offer, the customer will be required to return the decoder, within 30 days following the day of termination, by courier or parcel post, to the address indicated in the TIM invoice or provided by customer service 187, giving notice shipment to the same customer Service 187. Alternatively, the customer can exercise the option to purchase the TIMvision decoder. Failure to return the decoder by the customer within the period specified above will be considered in all respects as the exercise of the purchase of the decoder by the customer. The purchase price will be different depending on the year in which the termination takes place: 59 euro if the termination is requested in the first year, 39 euro from the second year onwards.</li>\n<li>The customer may request, at any time, the suspension of the subscription for up to 3 times in a calendar year, with discontinuation of the monthly payment from Telecom Italy within 72 hours of request. During the period of suspension the rental and purchase of individual content and the use of free content will still be guaranteed. The Customer may request the suspension and subsequent reactivation subscription by calling the free Customer Service 187.</li>\n<li> For more details go on timvision.it website or call Customer Service 187.</li></ul>\n</ul>', '5 euro/month instead of 10 euro/month with decoder');

-- --------------------------------------------------------

--
-- Struttura della tabella `slService`
--

CREATE TABLE IF NOT EXISTS `slService` (
  `Title` varchar(255) CHARACTER SET utf8 NOT NULL,
  `Category` varchar(255) CHARACTER SET utf8 NOT NULL,
  `LongDesc` text CHARACTER SET utf8 NOT NULL,
  `Image` varchar(255) CHARACTER SET utf8 NOT NULL,
  `Subtitle` varchar(255) CHARACTER SET utf8 NOT NULL,
  `Content` text CHARACTER SET utf8 NOT NULL,
  `LittleImage` varchar(255) CHARACTER SET utf8 NOT NULL,
  `ShortDesc` text CHARACTER SET utf8 NOT NULL,
  `ActiveTransition` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`Title`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `slService`
--

INSERT INTO `slService` (`Title`, `Category`, `LongDesc`, `Image`, `Subtitle`, `Content`, `LittleImage`, `ShortDesc`, `ActiveTransition`) VALUES
('TIM Vision', 'TV & Entertainment', 'Cartoons, movies, TV series, documentaries and concerts always on demand to create your own schedule without advertising. More than 8,000 titles on a subscription, with no time constraints, even in HD on TV with dedicated decoder, Smart TV, PC, Smartphone and Tablet.', '../img/Timvision-logo.png', 'Contents', '<ul>\n  <li>Movies : A great variety of movies with the most anticipated premieres, the great classics, unreleased, action films, thrillers, comedies and animation for the whole family. In addition the HD, to make every spectacular image and not miss a single detail.</li>\n  <li>TV Series : All episodes of the best TV series, from the most famous to the most exclusive, available immediately and see all in one breath and, not to interrupt your marathon, you can watch also TIMvision on the WEB, on Smartphone and Tablet.</li>\n  <li>Kids and Junior : The cartoons and favourite series for children and teenagers, finally without commercial breaks. A rich offer that meets all ages, from the smallest to the largest, with the Parental Control Security.</li>\n  <li>Music : More than 50 concerts and live events of the best Italian and international artists to enjoy the best music, anywhere, anytime.</li>\n</ul>', '../img/timvis.png', 'Cartoons, movies, TV series, documentaries and concerts always on demand. More than 8,000 titles on a subscription, with no time constraints, even in HD.', 1),
('TIM Wallet', 'Personal Services', 'Using TIM Wallet you can use your Smartphone in order to perform payments in every possible partner shop.<br><br>\r\n<ul>\r\n  <li>All the data of your credit card are memorized confidentially and protecte safely on your TIM Card.</li>\r\n  <li>It''s very fast to do it: you only need a touch to use your credit card for purchasing.</li>\r\n  <li>You don''t need to bring your wallet with you! Your credit cards can be used by your smartphone.</li>\r\n</ul>', '../img/timwallet.jpg', 'Partner Credit Cards', 'Discover now TIM SmartPay! The prepaid card was born from the partnership between Intesa Sanpaolo and TIM, and is dedicated to all TIM customers; or choose the payment card you prefer among those available in Intesa Sanpaolo, UBI Banca Mediolanum, BNL bank or Hello!', '../img/timwallet.jpg', 'Choose the credit cards of Intesa Sanpaolo, UBI or Mediolanum: paying is simple and convenient!', 1),
('Well Up', 'Health and Wellness', 'A free app developed as a personal diary, to have at any moment all the information on medical preventive controls to be done periodically for themselves and for the whole family.', '../img/i8.jpg', 'Well Up - Expect to feel good', 'The idea is to develop a series of contents available on the Intranet of the Telecom Italian Group to which employees can access to find information on health and prevention, useful for themselves and for the whole family. The project will allow employees of the Telecom Italian Group to interact with the experts of the Umberto Veronesi Foundation on some topics chosen periodically:\n-  oncology,\n-  cardiology,\n-  healthy diet,\n-  viruses and vaccines (focus on children and the elderly),\n-  no smoking,\n-  theme chosen by the employees.', '../img/wellup.jpg', 'A free app developed like a personal diary, to arrange everytime of all the information on preventive medical examinations which have to be periodically performed, for you and for the whole family.', 0),
('Healthwatch', 'Health and Wellness', '', '', '', '', '../img/healthwatch.jpg', 'The best way to practice sport healthily is to constantly monitor your physical condition.', 0),
('TIM Sky', 'TV & Entertainment', '', '', '', '', '../img/sky.png', 'Only our fiber and the faster they will bring ADSL SKY, no parable. TIM SKY, the first offer that gives you calls, unlimited internet and brings you home the spectacle of SKY, without a parable.', 0),
('Netflix', 'TV & Entertainment', '', '', '', '', '../img/netflix.png', 'TV series and movies from  7.99 euro / month, where you want and when you want, even the decoder TIMvision.', 0),
('TIM Premium Online', 'TV & Entertainment', '', '', '', '', '../img/premium.png', 'Football, Movies, TV and Infinity Series for TIM customers to 19 euro / month throughout 2016 to see when and where you want.', 0),
('Transports', 'Personal Services', '', '', '', '', '../img/transport.jpg', 'Buy transport tickets of your city, through the SMS ticketing service. Check now if the service is already available in your city!', 0),
('Fidelity Card', 'Personal Services', '', '', '', '', '../img/fidelity.jpg', 'Save your fidelity cards on your smartphone to have them always with you.', 0),
('Coupon', 'Personal Services', '', '', '', '', '../img/coupon.png', 'Save on a wide range of products and services selected from QUI! Group', 0),
('TIM Tag', 'Home & Family', '', '', '', '', '../img/timtag.png', 'TIMTag, is the device which informs you about the position of your dog and of your important things.Follow in real time its movements on your smartphone keeping it on eyes.', 0),
('TIM Home Connect', 'Home & Family', '', '', '', '', '../img/timcasa.png', 'The ideal solution for managing all domotic systems placed in your home, from the boiler to the most advanced monitoring systems.', 0),
('D-Link Start Home', 'Home & Family', '', '', '', '', '../img/dlink.png', 'D-Link SmartHome Starter Kit offers you the possibility to set up, check, monitoring and automate your home everywhere you are.', 0);

-- --------------------------------------------------------

--
-- Struttura della tabella `TechCharacteristics`
--

CREATE TABLE IF NOT EXISTS `TechCharacteristics` (
  `Device` varchar(255) NOT NULL,
  `Technology` varchar(255) DEFAULT NULL,
  `Frequencies` varchar(255) DEFAULT NULL,
  `Connectivity` varchar(255) DEFAULT NULL,
  `Interfaces` varchar(255) DEFAULT NULL,
  `Advanced Features` varchar(255) DEFAULT NULL,
  `GPS` varchar(255) DEFAULT NULL,
  `Display` varchar(255) DEFAULT NULL,
  `Camera` varchar(255) DEFAULT NULL,
  `Videocamera` varchar(255) DEFAULT NULL,
  `Sensors` varchar(255) DEFAULT NULL,
  `Internal Memory` varchar(255) DEFAULT NULL,
  `Processor` varchar(255) DEFAULT NULL,
  `SIM format` varchar(255) DEFAULT NULL,
  `Video` varchar(255) DEFAULT NULL,
  `Music` varchar(255) DEFAULT NULL,
  `Size` varchar(255) DEFAULT NULL,
  `Weight` varchar(255) DEFAULT NULL,
  `Operative System` varchar(255) DEFAULT NULL,
  `Autonomy` varchar(255) DEFAULT NULL,
  `Contents` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Device`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `TechCharacteristics`
--

INSERT INTO `TechCharacteristics` (`Device`, `Technology`, `Frequencies`, `Connectivity`, `Interfaces`, `Advanced Features`, `GPS`, `Display`, `Camera`, `Videocamera`, `Sensors`, `Internal Memory`, `Processor`, `SIM format`, `Video`, `Music`, `Size`, `Weight`, `Operative System`, `Autonomy`, `Contents`) VALUES
('Samsung Galaxy S7 Edge', '4G cat.9/HSDPA42UMTS/EDGE/GPRS', '850/900/1800/1900/2100', 'Wi-Fi - Bluetooth - Micro USB - NFC', NULL, NULL, 'Integrated', '5.5" 16 Milion colours Touch', '12 Mpixel/Flash', NULL, NULL, '32GB', 'OctaCore: (QuadCore 2.3 Ghz+QuadCore 1.6 Ghz)', 'Nano', 'Video Recorder&Playback', 'MP3 Player', '150 - 9x72 - 6x7 - 7 mm', '157 gr.', 'Android 6.0', NULL, NULL),
('Apple iPhone 6s', NULL, NULL, '4G LTE Advanced1 and Wi-Fi 802.11a/b/g/n/ac with MIMO technology', NULL, NULL, NULL, 'Retina HD 4.7" (diagonal) with 1334x750 pixel resolution - 3D Touch', 'iSight 12 megapixel with Focus Pixels + True Tone Flash + Live Photos', 'FaceTime HD with Retina Flash (5MP pictures)', 'second generation Touch ID', NULL, 'Chip A9 with M9 integrated coprocessor of moviment', NULL, '4K with 30 fps - moviola (1080p) with 120 fps', NULL, NULL, NULL, 'iOS 9 and iCloud', NULL, NULL),
('Samsung Galaxy TAB A 9.7', 'LTE/HSDPA/HSUPA', NULL, 'Wi-Fi 802.11 a/b/g/n - Bluetooth 4.0 - micro USB', NULL, NULL, NULL, '9.7" TFT - 1024x768 (4:3)', 'Front: 2 Mpxl - Back: 5 Mpxl', NULL, 'Touch ID fingerprints', 'Internal 16GB (expandable to 128GB) - Ram 2GB', 'Snapdragon 410 QuadCore da 1.2 GHz', NULL, 'aac-amr-awb-mp3-ogg-wav-DivX- XviD- MPEG4- VP8- H.263- H.264', NULL, '242.5 x 166.8 x 7.4 mm', '455 grams', 'Android 5.0.2', NULL, 'charger - user manual - usb data cable'),
('Modem Fibra', 'ADSL/ADSL 2+/VDSL', NULL, 'WiFI Concurrent 802.11 b/g/n  2.4 Ghz and 5 Ghz', '1 ADSL/VDSL port - 1  WAN port - 4 ports Gigabit Ethernet - 1 Integrated Dect interface - 1 PSTN  port  - 2 FXS ports for telephone link - 2 USB port for disks and printers link', 'Foto - music and video sharing - Hard Disk and printers', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Fiber Modem - DSL filter with 2 already connected telephone cables\\nEthernet cable with yellow connectors - power supply'),
('Samsung Gear Fit', NULL, NULL, 'Bluetooth 4.0 - Micro USB', NULL, 'Water and dust resistance (IP67)', NULL, 'Curved Super AMOLED touchscreen of 1.84" (28x432 resolution) with 16M colours', NULL, NULL, 'Accelerometer - Gyroscope - Heart sensor', NULL, NULL, NULL, NULL, NULL, '23.4 x 57.4 x 11.95 mm', '27 grams', NULL, '210mAh battery', NULL),
('Huawei P9', '4GPlus/4G/HSDPA 42/UMTS/EDGE/GPRS Frequencies 850/900/1800/1900MHz', NULL, '4G cat.6/HSDPA42/UMTS/EDGE/GPRS  Direct Wi-Fi a/b/g/n/ac dual band 2./5GHz', NULL, NULL, 'Integrated', 'IPS Full HD 5.2"', '12MP x 2 the primary - f/2.2 Leica BSI CMOS Flash dual-tone 8MP frontal - f/2.4', NULL, NULL, '32GB', 'Kirin 955 - Octa-Core (4x2.5 GHz + 4x1.8 GHz)', NULL, NULL, NULL, '145 x 70.9 x 6.95 mm', '144 gr', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Struttura della tabella `transition`
--

CREATE TABLE IF NOT EXISTS `transition` (
  `Source` varchar(150) NOT NULL,
  `Type` varchar(255) NOT NULL,
  `Destination` varchar(150) NOT NULL,
  `Active` tinyint(1) NOT NULL,
  PRIMARY KEY (`Source`,`Destination`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `transition`
--

INSERT INTO `transition` (`Source`, `Type`, `Destination`, `Active`) VALUES
('Samsung Galaxy S7 Edge', 'Devices', 'Connect to internet with the mobile phone', 1),
('Samsung Galaxy S7 Edge', 'Devices', 'SOS Smartphone', 0),
('Samsung Galaxy S7 Edge', 'Devices', 'MyTIM Mobile (cost check)', 1),
('Samsung Galaxy S7 Edge', 'Devices', 'Smartphone MAP Service', 0),
('Connect to internet with the mobile phone', 'Assistance Services', 'Samsung Galaxy S7 Edge', 1),
('Connect to internet with the mobile phone', 'Assistance Services', 'Samsung Galaxy TAB A 9.7', 1),
('Connect to internet with the mobile phone', 'Assistance Services', 'Apple iPhone 6S', 1),
('Connect to internet with the mobile phone', 'Assistance Services', 'Huawei P9', 1),
('Connect to internet with the mobile phone', 'Assistance Services', 'Apple iPad Air 2 16 GB', 0),
('TIM Wallet', 'Smart Life Services', 'Samsung Galaxy S7 Edge', 1),
('TIM Wallet', 'Smart Life Services', 'Huawei P9', 1),
('TIM Wallet', 'Smart Life Services', 'LG X Screen', 0),
('TIM Wallet', 'Smart Life Services', 'LG Nexus 5X', 0),
('TIM Vision', 'Smart Life Services', 'Decoder TIMvision', 0),
('TIM Vision', 'Smart Life Services', 'Samsung Smart TV', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
