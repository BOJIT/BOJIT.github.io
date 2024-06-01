---
title: "One-Per-Project"
date: "01-06-2024"
published: false

tile:
  type: image
  image: /tiles/2017-05-15-Art_Coursework.JPG
---

<script>
    import { Gallery } from "@bojit/svelte-components/widgets";

    let tiles = [
        {
            type: 'image',
            caption: '2009 - Kinex Drumkit',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2009-Kinex.JPG'
        },
        {
            type: 'image',
            caption: '2012 - Guitar Headphone Amplifier',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2012-Headphone-Amp.PNG'
        },
        {
            type: 'image',
            caption: '2012 - First Guitar Pedal',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2012-Pedal.JPG'
        },
        {
            type: 'image',
            caption: '2012 - VW T4 Scalextric Car',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2012-Scalextrix.PNG'
        },
        {
            type: 'image',
            caption: '2012 - VanDanderMandolin',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2012-VandanderMandolin.JPG'
        },
        {
            type: 'image',
            caption: '2013 - Mini Scalextric Car',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2013-Scalextric.PNG'
        },
        {
            type: 'image',
            caption: '2013 - Meccano Spindle Sander',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2013-SpindleSander.JPG'
        },
        {
            type: 'image',
            caption: '2013 - Home-made Electric Mandolin',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2013-Mandolin.JPG'
        },
        {
            type: 'image',
            caption: '2014 - Laser Cut Desk Tidy',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2014-DeskTidy.JPG'
        },
        {
            type: 'image',
            caption: '2014 - Eco Classroom Design Competition',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2014-EcoClassroom.PNG'
        },
        {
            type: 'image',
            caption: '2014 - Tobacco Tin Guitar Pedal',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2014-Pedal.JPG'
        },
        {
            type: 'image',
            caption: '2014 - Pickup Winder: First Revision',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2014-PickupWinder1.JPG'
        },
        {
            type: 'image',
            caption: '2014 - Pickup Winder: Second Revision',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2014-PickupWinder2.JPG'
        },
        {
            type: 'image',
            caption: '2014 - Punk Rock Guitar Body',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2014-PunkGuitar.JPG'
        },
        {
            type: 'image',
            caption: '2015 - Home-Made Lighting Control Desk',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2015-MagicQWing.JPG'
        },
        {
            type: 'image',
            caption: '2015 - Music-Responsive Neopixel [PROTOTYPE]',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2015-NeopixelPrototype.JPG'
        },
        {
            type: 'image',
            caption: '2015 - Music-Responsive Neopixel [FINISHED]',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2015-NeopixelRing.JPG'
        },
        {
            type: 'image',
            caption: '2015 - Projector Dowser (Disk Drive)',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2015-ProjectorDowser.JPG'
        },
        {
            type: 'image',
            caption: '2016 - Custom Guitar Pickup',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2016-CustomPickup.JPG'
        },
        {
            type: 'image',
            caption: '2016 - Laser-Cut Desk Tidy',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2016-DeskTrinket.JPG'
        },
        {
            type: 'image',
            caption: '2016 - Custom Electric Guitar (GCSE)',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2016-ElectricGuitar.JPG'
        },
        {
            type: 'image',
            caption: '2017 - Artnet to DMX Converter',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2017-ArtnetNode.JPG'
        },
        {
            type: 'image',
            caption: '2017 - Greenpower Car Chassis Design',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2017-GreenpowerCar.JPG'
        },
        {
            type: 'image',
            caption: '2017 - LED Shard Light (DT Entrepeneur)',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2017-UEtchB.JPG'
        },
        {
            type: 'image',
            caption: '2017 - DMX to Analogue Converter',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2017-DMXConverter.JPG'
        },
        {
            type: 'image',
            caption: '2018 - Wall-Mount DMX Controller',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2018-DMXController.JPG'
        },
        {
            type: 'image',
            caption: '2018 - DMX-Controlled LED Dimmer for Theatre',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2018-DMXDimmer.JPG'
        },
        {
            type: 'image',
            caption: '2018 - KinectIP Ethernet-Connected Lighting Controller',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2018-KinectIP.JPG'
        },
        {
            type: 'image',
            caption: '2018 - ATX Bench Power Supply',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2018-PowerSupply.JPG'
        },
        {
            type: 'image',
            caption: '2018 - PID-Controlled Reflow Oven',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2018-ReflowOven.JPG'
        },
        {
            type: 'image',
            caption: '2018 - Custom Closed-Loop Stepper Controller',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2018-StepperController.JPG'
        },
        {
            type: 'image',
            caption: '2019 - Audio Interface MIDI-Controlled Mux',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2019-AudioMux.JPG'
        },
        {
            type: 'image',
            caption: '2018 - Portable CNC Machine',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2019-CNC.JPG'
        },
        {
            type: 'image',
            caption: '2019 - A-Level Discrete Digital Logic',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2019-ElectronicsHardware.JPG'
        },
        {
            type: 'image',
            caption: '2019 - Kinect-Controlled Interactive Lighting Installation',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2019-EveryBrilliantThing.PNG'
        },
        {
            type: 'image',
            caption: '2019 - University Fridge Art',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2019-FridgeArt.JPG'
        },
        {
            type: 'image',
            caption: '2019 - Greenpower F24 Car Datalogging System',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2019-GreenpowerControl.JPG'
        },
        {
            type: 'image',
            caption: '2019 - Custom Hackintosh PowerMac G5',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2019-Hackintosh.JPG'
        },
        {
            type: 'image',
            caption: '2019 - School Laser Cutter Fan Control Adapter',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2019-LaserCutterFan.JPG'
        },
        {
            type: 'image',
            caption: '2019 - USB Macro Pad for DaVinci Resolve',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2019-MacroPad.JPG'
        },
        {
            type: 'image',
            caption: '2019 - Magnetic Encoder Stepper Controller',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2019-StepperPrototype.JPG'
        },
        {
            type: 'image',
            caption: '2020 - DIY Electric Drum Pads',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2020-DrumPad.JPG'
        },
        {
            type: 'image',
            caption: '2020 - LED Mirror Hammock Room',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2020-LEDHammockRoom.JPG'
        },
        {
            type: 'image',
            caption: '2020 - MIDI footswitch for Ableton Live',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2020-MidiFootswitch.JPG'
        },
        {
            type: 'image',
            caption: '2021 - BOJIT V3 Electric Guitar',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2021-BOJITV3.JPG'
        },
        {
            type: 'image',
            caption: '2021 - Violin Bow Re-hair',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2021-BowRehair.JPG'
        },
        {
            type: 'image',
            caption: '2021 - Desk Monitor and Lamp Gantry',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2021-DeskFrame.JPG'
        },
        {
            type: 'image',
            caption: '2021 - End of the Road Festival Spraypaint Art',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2021-PeacockSign.JPG'
        },
        {
            type: 'image',
            caption: '2021 - Home-made Router Sled',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2021-RouterSled.JPG'
        },
        {
            type: 'image',
            caption: '2021 - Home-made Router Table',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2021-RouterTable.JPG'
        },
        {
            type: 'image',
            caption: '2022 - Electrification of Accoustic Guitar',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2022-AccousticConversion.JPG'
        },
        {
            type: 'image',
            caption: '2022 - University Embedded Software Coursework',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2022-EmbeddedCoursework.JPG'
        },
        {
            type: 'image',
            caption: '2022 - Univerity Coursework: Gas Concentration Detector',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2022-GasCounter.JPG'
        },
        {
            type: 'image',
            caption: '2022 - Power Window Controller for Van',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2022-PowerWindowController.JPG'
        },
        {
            type: 'image',
            caption: '2022 - Van Conversion',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2022-VanConversion.JPG'
        },
        {
            type: 'image',
            caption: '2022 - Garage Workbenches',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2022-Workbenches.JPG'
        },
        {
            type: 'image',
            caption: '2023 - ploTTY Flow-Based Serial Monitor',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2023-Plotty.PNG'
        },
        {
            type: 'image',
            caption: '2023 - Van Roof Racks',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2023-RoofRacks.JPG'
        },
        {
            type: 'image',
            caption: '2023 - Univeristy Dissertation: PTP Time Synchronisation',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2023-TimeSynchronisation.JPG'
        },
        {
            type: 'image',
            caption: '2023 - Watercolour Memorial for the Van :(',
            image: import.meta.env.VITE_IMAGE_BASE + '/one-per-project/2023-VanPainting.JPG'
        },
    ];
</script>

TODO
SW and Digital Art not Shown Here

<Gallery tiles={[...tiles]} animate={true}/>
