Project report for Third Year Second Semester

in Computer Science & Engineering

Project Title:

Traffic detection

MD. Shadhin Khan

Student ID: 0572310005101003

                                      Meharab Hasan

Student ID: 0572310005101005

Department of Computer Science & Engineering

                                  First Capital University Of Bangladesh

      Chuadanga

Date of submission: 11.11.2025

Traffic Detection

by

MD. Shadhin Khan

Student ID: 0572310005101003

                                      Meharab Hasan

Student ID: 0572310005101005

Supervised by

Saifa  Azmiri  Mohona

Lecturer

Computer Science & Engineering

Submitted to the Department of Computer Science & Engineering

First Capital University Of Bangladesh

Project Approval

                                Student’s Name: Md Shadhin Khan

Student’s ID: 0572310005101003

Course Code: CSE378

                                        Student’s Name: Meharab Hasan

           Student’s ID: 0572310005101005

Course Code: CSE378

                                    Project Title: Traffic Detection

We the undersigned, recommend that the project completed by the student listed
above, in Third Year Second Semester, be accepted by the Department of
Computer Science and Engineering, First Capital University Of Bangladesh

for deposit.

Supervisor Approval*

………………………………..

Saifa Azmiri Mohona Lecturer

Department of Computer Science and Engineering

First Capital University Of Bangladesh
 Chuadanga

Dedicated to

Our parentsg

Abstract

This project presents a Deep learning-based vehicle detection system that leverages the YOLOv8

model integrated with OpenCV to identify and classify different types of vehicles in real-time. The

primary objective is to enhance traffic monitoring and road safety through an automated detection

mechanism capable of recognizing cars, buses, trucks, and motorbikes from video footage. YOLOv8,

a state-of-the-art object detection model, was selected for its high accuracy and fast inference speed.

The system processes each frame of a 720p video and draws bounding boxes around detected vehicles

while  displaying  the  corresponding  confidence  scores.  The  implementation  demonstrates  how

computer vision and neural networks can be combined effectively to achieve real-time performance.

The  results  indicate  that  the  model  provides  reliable  accuracy  and  detection  stability,  making  it  a

promising approach for applications in intelligent transportation systems.

1

Acknowledgements

First and foremost, we would like to express our deepest gratitude to Almighty Allah for His endless

blessings, mercy, and guidance that enabled us to complete this project successfully.

We would like to extend our appreciation Saifa Azmiri Mohona, Lecturer, Department of Computer

Science  &  Engineering  for  her  invaluable  guidance,  encouragement,  and  continuous  support

throughout  the  course  of  this  project.  Her  expert  insights  and  constructive  feedback  helped  us

overcome many challenges and inspired us to complete this work successfully.

Finally, we extend our heartfelt thanks to our parents.

2

Table of Contents

1  Chapter-1  ...................................................................................................................................... 3

1

INTRODUCTION ........................................................................................................................ 3

1.1

1.2

Background of the study  ..................................................................................................... 3

Project Overview  .................................................................................................................. 4

2  Chapter-2  ...................................................................................................................................... 5

2  Literature Review & Theoretical Background  ......................................................................... 5

2.1

2.2

Introduction  ......................................................................................................................... 5

Literature Review ................................................................................................................. 5

2.2.1

2.2.2

Traditional Approaches to Vehicle Detection  ............................................................. 5

Deep Learning-Based Approaches  .............................................................................. 5

3  Chapter-3  ...................................................................................................................................... 6

System Design and Methodology ................................................................................................. 6

                        3.1      System Architecture and Workflow  ................................................................................... 6

3.1.1

3.1.2

System Architecture  ..................................................................................................... 6

System Workflow .......................................................................................................... 7

3.2

3.3

Tools and Technologies Used  .............................................................................................. 8

Dataset and Model Description  .......................................................................................... 9

3.3.1

Summary ....................................................................................................................... 9

4  Chapter-4  .................................................................................................................................... 10

4

Implementation and Result  ....................................................................................................... 10

4.1

4.2

4.3

System Implementation  ..................................................................................................... 10

Source Code Implementation  ........................................................................................... 11

Performance Evaluation  ................................................................................................... 12

4.3.1

The result obtained during test  ................................................................................ 13

5  Chapter-5 ..................................................................................................................................... 14
5      Conclusion and Future Work .................................................................................................... 14

1

Table of Figures

Figure 3.1: Car  detection Diagram
 6
11
Figure 4.1: Source Code
Figure 4.2: Real time detection                                                                                                12

2

Chapter 1

INTRODUCTION

1.1 Background of the Study

In the modern era, artificial intelligence (AI) and deep learning have revolutionized how machines

perceive and interact with the environment. One of the most impactful areas of computer vision is

vehicle  detection,  which  serves  as  the  foundation  for  numerous  applications,  including  traffic

management, surveillance systems, and intelligent transportation. Detecting and classifying vehicles

from live or recorded video footage allows for better traffic control, accident prevention, and real-

time monitoring of road conditions.

Traditional  image  processing  methods  rely  heavily  on  manual  feature  extraction  and  often  fail  in

complex  environments  such  as  poor  lighting,  occlusion,  or  dynamic  backgrounds.  Deep  learning-

based object detection models, however, overcome these limitations by learning features directly from

data.  Among  these,  the  YOLO  (You  Only  Look  Once)  family  of  models  has  gained  significant

popularity for its balance between accuracy and speed.

3

1.2 Project Overview

This project, titled “Vehicle Detection Using Deep Learning (YOLOv8 and OpenCV)”, aims to

develop a real-time system capable of detecting various types of vehicles such as cars, trucks, buses,

and motorbikes. The system uses the YOLOv8 model, a state-of-the-art deep learning architecture,

integrated  with  OpenCV  for  image  and  video  processing.  The  program  takes  a  video  as  input,

processes each frame, identifies vehicles, and draws bounding boxes with confidence scores.

4

Chapter 2

Literature Review & Theoretical Background

2.1 Introduction

This  chapter  presents  an  overview  of  existing  research  and  theoretical  concepts  related  to  vehicle

detection,  deep  learning,  and  computer  vision.  It  discusses  the  evolution  of  object  detection

techniques,  the  advantages  of  deep  learning  approaches,  and  the  fundamentals  of  the  YOLOv8

architecture and OpenCV library used in this project.

2.2 Literature Review

2.2.1 Traditional Approaches to Vehicle Detection

Earlier vehicle detection methods relied primarily on motion-based and appearance-based algorithms.

Motion-based approaches such as background subtraction compared consecutive frames to identify

moving  objects,  while  frame  differencing  and  optical  flow  techniques  measured  pixel  intensity

changes. Appearance-based methods used handcrafted features like Histogram of Oriented Gradients

(HOG)  and  Scale-Invariant  Feature  Transform

(SIFT)

to

recognize  vehicle  shapes.

Although these techniques worked well under controlled conditions, they failed in the presence of

illumination  changes,  occlusions,  or  high  traffic  density.  Their  inability  to  adapt  to  complex

environments led to the exploration of machine learning and deep learning models.

2.2.2 Deep Learning-Based Approaches

Deep learning introduced a paradigm shift in object detection. Models such as R-CNN (Region-based

Convolutional  Neural  Network)  and  its  successors  (Fast  R-CNN,  Faster  R-CNN)  utilized  region

proposal networks to improve detection accuracy. However, they were computationally expensive

and unsuitable for real-time applications.

The Single Shot Detector (SSD) and YOLO models addressed this limitation by performing detection

and classification in a single network pass, significantly increasing processing speed.

5

Chapter 3

System Design and Methodology

3.1 System Architecture and Workflow

3.1.1 System Architecture

The proposed system  follows a modular architecture consisting of multiple components that work

together to achieve real-time vehicle detection. The system architecture is designed to ensure high

efficiency and scalability.

Main Components of the System:

1.  Input Module – Captures video from file or live camera.

2.  Preprocessing Module – Converts and resizes frames for model input.

3.  YOLOv8 Detection Module – Performs detection and classification of vehicles.

4.  Post-processing Module – Filters detections, draws bounding boxes, and labels.

5.  Output Module – Displays the processed video in real time using OpenCV

                                                              Figure 3.1: Car  detection Diagram

6

3.1.2 System Workflow

The workflow represents the sequential steps executed during the operation of the vehicle detection

system.

Video Input Acquisition:

The system reads frames from a video file (e.g., traffic.mp4) or live webcam.

1.  Frame Preprocessing:

Each frame is resized and formatted to match YOLOv8 input dimensions.

2.  Model Loading:

The pre-trained YOLOv8 model is loaded for inference.

3.  Vehicle Detection:

The model detects objects in each frame and returns bounding box coordinates, class IDs,

and confidence scores.

4.  Filtering and Visualization:

Only vehicles (car, truck, bus, motorbike) are displayed with bounding boxes and labels.

5.  Result Display:

The processed video with detections is displayed until the user presses “Q” to exit.

7

3.2 Tools and Technologies Used

Tool / Library

Purpose / Use

Python

                  Main programming language

YOLOv8 (Ultralytics)                   Object detection model

OpenCV

NumPy

PyTorch

                  Frame handling, bounding boxes, display

                  Numerical operations

                  Deep learning framework backend

Visual Studio Code

                  Code writing and execution

8

3.3 Dataset and Model Description

The  YOLOv8  model  used  in  this  project  was  pre-trained  on  the  COCO  (Common  Objects  in

Context) dataset, containing over 80 object categories, including vehicles such as cars, buses, and

motorbikes.

The dataset provides a large variety of labeled examples under different environmental conditions,

allowing YOLOv8 to generalize well in real-world scenarios.

The model variants used:

•  YOLOv8n.pt (Nano): Fast and lightweight, suitable for low-end systems.

•  YOLOv8m.pt (Medium): Offers higher accuracy, suitable for systems with more RAM and

GPU support.

•  YOLOv8s.pt

(Small):

A balanced model offering a good trade-off between speed and accuracy. It runs efficiently

on mid-range systes and is often preferred for real-time video detection tasks.

3.3.1 Summary

This chapter provided an in-depth overview of the system’s design, architecture, and methodology.

The  integration  of  YOLOv8  and  OpenCV  ensures  real-time,  accurate  vehicle  detection.  The  next

chapter discusses system implementation and performance results, showcasing how effectively

the model performs under real-world conditions.

9

Chapter 4

Implementation and Results

4.1 System Implementation

The system was implemented following the modular design described in Chapter 3. Each component

of the architecture was developed as a separate block to ensure scalability and easier debugging. The

implementation steps are as follows:

1.  Loading Required Libraries:

The Python environment was configured with the required libraries — Ultralytics YOLO,

OpenCV, NumPy, and PyTorch.

2.  Model Initialization:

The pre-trained YOLOv8 model (yolov8n.pt, yolov8s.pt, or yolov8m.pt) was loaded

depending on the available hardware capability.

3.  Video Input Setup:

The system used a pre-recorded 720p video file named traffic.mp4 placed in the working

directory. OpenCV’s VideoCapture() function was used to read video frames sequentially.

4.  Frame-by-Frame Detection:

Each frame from the video was passed through the YOLOv8 model for inference. The

model output included detected object coordinates, class labels, and confidence values.

5.  Filtering and Drawing Results:

The program filtered out non-vehicle objects and displayed only car, truck, bus, and

motorbike detections. Green bounding boxes and labels with confidence percentages were

drawn using OpenCV functions.

6.  Display and Termination:

The processed frames were displayed in a real-time window titled “YOLO Vehicle

Detection.” The user could terminate execution by pressing the ‘Q’ key.

10

4.2 Source Code Implementation

                              Figure 4.1: Source Code

11

4.3 Performance Evaluation

The performance of the system was evaluated based on detection accuracy, processing speed,

and reliability during continuous video playback. The testing was conducted using a 720p, 30

FPS, 1-minute video on a laptop with the following specifications:

                        Processor: AMD Ryzen 5 pro 7540U

                        RAM: 32 GB DDR5 5600MHZ

                        Operating System: Windows 11 64-bit

                        Graphics: Integrated AMD Radeon

                                                           Figure 4.2 : Real time detection

12

4.3.1 The results obtained during testing

Vehicle

Average  Detection  Accuracy

Average  Confidence  Score

Detection

Speed

Type

    Car

(%)

(%)

(FPS)

                      93%

                   80-90%

           30 FPS

    Bus

                      98%

                   80-90%

           30 FPS

   Truck

                      98%

                   80-90%

           30 FPS

   Motorbike                        75%

                   40-50%

           30 FPS

13

Chapter 5

Conclusion and Future Work

This project successfully developed a deep learning-based vehicle detection system using YOLOv8

and OpenCV, capable of detecting and classifying multiple vehicle types in real-time video streams.

The system achieved an average accuracy above up to 90% while maintaining smooth performance

on 720p, 30 FPS video. It demonstrated the strength of combining deep learning with computer vision

for intelligent traffic monitoring and analysis. Despite some limitations such as reduced accuracy in

low-light  and  occluded  conditions,  the  system  performed  reliably  under  standard  environments.

Future  improvements  may  include  integrating  vehicle  tracking,  enhancing  performance  in  poor

lighting, and adding features like vehicle counting or speed estimation. Overall, this project highlights

how modern AI techniques can effectively contribute to developing intelligent transportation systems

and pave the way for future research in automated traffic management.

14

References

Ultralytics. (2024). YOLOv8 Documentation. Retrieved from
https://docs.ultralytics.com
Ultralytics  GitHub  Repository.
https://github.com/ultralytics

(2024).  YOLOv8  Models  and  Assets.  Retrieved

from

15

