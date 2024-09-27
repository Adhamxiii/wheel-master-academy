import {
  ContactsProps,
  CountUpItemProps,
  Lesson,
  NavLink,
  ServiceProps,
} from "@/Types";
import { FaBookReader, FaChalkboardTeacher } from "react-icons/fa";
import { GiTrafficLightsGreen } from "react-icons/gi";
import { MdOutlineSchool } from "react-icons/md";

export const navLinks: NavLink[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Educational Content",
    path: "/educational-content",
  },
  {
    label: "Resources",
    path: "/resources",
  },
  {
    label: "Gallery",
    path: "/gallery",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

export const countUpItems: CountUpItemProps[] = [
  {
    id: 1,
    number: 15,
    text: "Years of Experience",
  },
  {
    id: 2,
    number: 100,
    text: "Satisfied Learners",
  },
  {
    id: 3,
    number: 50,
    text: "Study Tools",
  },
  {
    id: 4,
    number: 150,
    text: "Certified Drivers",
  },
];
export const services: ServiceProps[] = [
  {
    id: 1,
    title: "Educational Content",
    description:
      "Access high-quality educational material to enhance your learning experience.",
    icon: <MdOutlineSchool />,
  },
  {
    id: 2,
    title: "Practice Tests",
    description:
      "Prepare for your exams with comprehensive practice tests and mock exams.",
    icon: <FaBookReader />,
  },
  {
    id: 3,
    title: "Traffic School",
    description:
      "Join our certified traffic school to improve your driving skills and knowledge.",
    icon: <GiTrafficLightsGreen />,
  },
  {
    id: 4,
    title: "Easy Learning Modules",
    description:
      "Engage with easy-to-follow learning modules designed for quick mastery.",
    icon: <FaChalkboardTeacher />,
  },
];

export const gallery = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/1386649/pexels-photo-1386649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Hands-on Driving Experience",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Driver Focus",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/7433/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Gallery Image 3",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/787476/pexels-photo-787476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Learning on the Road",
  },
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/4391483/pexels-photo-4391483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Safe Driving in Urban Areas",
  },
  {
    id: 6,
    image:
      "https://images.pexels.com/photos/2555548/pexels-photo-2555548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Focused Driving Techniques",
  },
  {
    id: 7,
    image:
      "https://images.pexels.com/photos/5835562/pexels-photo-5835562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Taxi Driving Skills",
  },
];

export const contacts: ContactsProps[] = [
  {
    id: 1,
    title: "Address",
    text: "Alexandria - Egypt",
  },
  {
    id: 2,
    title: "Phone",
    text: "Office : +222 222 222 222",
  },
  {
    id: 3,
    title: "Available",
    text: "Sat-Thr: 09:00 - 23:00, Friday closed",
  },
];

export const videoLessons: Lesson[] = [
  {
    id: "v1",
    title: "Basic Driving Techniques",
    description: "Learn the fundamental techniques for safe driving.",
    difficulty: "beginner",
    content: "n4jYnWi-HF8",
  },
  {
    id: "v2",
    title: "Traffic Rules and Regulations",
    description: "Understand the essential rules of the road.",
    difficulty: "intermediate",
    content: "cL_L2H406xc",
  },
  {
    id: "v3",
    title: "Defensive Driving Strategies",
    description: "Master techniques to prevent accidents and stay safe.",
    difficulty: "advanced",
    content: "K11S1S4C1qA",
  },
];

export const articles: Lesson[] = [
  {
    id: "a1",
    title: "Top 10 Driving Tips for Beginners",
    description: "Essential advice for new drivers to build confidence.",
    content: [
      "1. Always wear your seatbelt.",
      "2. Obey speed limits.",
      "3. Avoid distractions.",
      "4. Maintain a safe following distance.",
      "5. Use turn signals.",
      "6. Stay calm in traffic.",
      "7. Familiarize yourself with your vehicle.",
      "8. Adjust your mirrors.",
      "9. Practice defensive driving.",
      "10. Get plenty of practice.",
    ],
  },
  {
    id: "a2",
    title: "Understanding Road Signs",
    description: "A comprehensive guide to interpreting road signs.",
    content:
      "Road signs are crucial for safe navigation and understanding traffic rules. They can be categorized into several types:\n1. Regulatory Signs: These signs inform drivers of laws and regulations they must follow, such as speed limits and stop signs.\n2. Warning Signs: These signs alert drivers to potential hazards on the road, such as sharp turns, pedestrian crossings, or road construction.\n3. Guide Signs: These provide information about directions, distances, and points of interest, helping drivers navigate more effectively. Understanding these categories is essential for all drivers to ensure safety on the roads.",
  },
  {
    id: "a3",
    title: "Car Maintenance Basics",
    description: "Learn how to keep your vehicle in top condition.",
    content:
      "Regular car maintenance is crucial for safety and longevity:\n1. Check oil levels regularly and change oil every 3,000 to 5,000 miles to keep the engine running smoothly.\n2. Rotate tires every 5,000 to 8,000 miles to ensure even wear and prolong their lifespan.\n3. Inspect tire pressure monthly to maintain optimal fuel efficiency and safety.\n4. Check fluid levels, including coolant, brake fluid, and windshield washer fluid, to prevent breakdowns.\n5. Monitor battery health and clean terminals to ensure reliability.\n6. Maintain brakes by checking pads and rotors for wear.\n7. Replace air filters as needed to improve engine efficiency.\n8. Ensure lights and signals are functioning properly for safe driving.",
  },
];
