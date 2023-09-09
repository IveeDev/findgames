# Project Name

[Game Discovery Web App] - Explore and Find Your Favorite Games

Game Discoverer is a powerful and user-friendly app that allows gaming enthusiasts to dive into a vast collection of games from various genres and platforms. With Game Discoverer, you can effortlessly explore and discover new gaming experiences based on your interests and preferences.

Key Features:

Extensive Game Library: Access a diverse and ever-growing library of games, ranging from action-packed adventures to immersive simulations, all in one place.

Intuitive Filtering: Easily refine your search by applying filters such as genre, platform, and release date to find the perfect game that matches your taste.

Sorting Options: Sort your search results by date, relevance, popularity, and more, enabling you to stay updated with the latest releases or discover timeless classics.

User Reviews and Ratings: Make informed decisions with insights from user reviews and ratings, sharing valuable feedback and experiences within the gaming community.

Uncover thrilling new worlds and rediscover beloved classics with Game Discoverer. Whether you're a casual gamer or a dedicated enthusiast, our app is your gateway to an unparalleled gaming adventure.

Download Game Discoverer now and embark on a journey through the vast universe of gaming possibilities!

## Table of Contents

. Project Overview
. Demo
. Technologies Used
. Installation
. Usage
. Features
. API Integration
. Contributing
. License
. Contact

**Project Overview**

Game Discoverer is a game discovery web application that allows users to explore a vast collection of games from different genres and platforms. It provides features such as filtering by genre and platform, sorting by date and relevance, and personalized game recommendations based on user interactions. The app is built using React, Typescript, Zustand for state management, Chakra UI for the user interface, and utilizes the RAWG API to fetch game data.

**Demo**

https://findgames.vercel.app

**Technologies Used**

List the technologies and libraries used in your project:

. React
. Typescript
. Zustand (for state management)
. Chakra UI (for user interface components)
. React Icons (for icons)
. RAWG API (for fetching game data)

**Installation**

1. Clone the repository: `git clone https://github.com/IdokoInnocent/findgames.git`
2. Navigate to the project directory: `cd your-project`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

**Features**

1. Extensive Game Library: Explore a vast collection of games from various genres and platforms, ranging from action-packed adventures to immersive simulations.

2. Intuitive Filtering: Effortlessly refine your search with easy-to-use filters, including genre and platform, to find games that match your interests.

3. Smart Sorting Options: Sort your game results based on date, relevance, popularity, and more, to stay up-to-date with the latest releases or discover timeless classics.

4. Personalized Recommendations: Receive tailored game recommendations based on your interactions and preferences, ensuring you never miss out on hidden gems.

5. User Reviews and Ratings: Make informed decisions with insights from user reviews and ratings, and share your own experiences within the gaming community.

6. Responsive Design: Enjoy a seamless experience on any device, as the app's user interface is optimized for responsiveness.

7. Accessibility: The app is designed with accessibility in mind, making it inclusive and usable for all users.

8. Fast and Efficient: Leveraging the power of React and state management with Zustand, the app offers fast loading times and smooth interactions.

9. Attractive UI with Chakra UI: Immerse yourself in a visually appealing user interface created using Chakra UI, providing an enjoyable browsing experience.

With these features, Game Discoverer empowers users to delve into a diverse gaming world, find the perfect games, and connect with the gaming community, all through an engaging and user-friendly interface.

**API Integration**

Game Discoverer utilizes the RAWG API to fetch game data, including information about games, genres, and platforms. The API integration allows the app to display an extensive collection of games and keep it up-to-date with the latest releases. Here's an overview of how the API is integrated into the application:

1. Obtaining an API Key: To access the RAWG API, you need to sign up for a free API key on their website rawg.io. The API key is required for authentication and to make requests to the API.

2. API Requests: We use various API endpoints provided by RAWG to fetch data relevant to the application. These requests are made using JavaScript's built-in fetch() method or with the help of popular libraries like axios or fetch.

3. Data Parsing and Display: Upon receiving the data from the API, we parse the JSON response to extract the relevant information, such as game titles, genres, platforms, release dates, reviews, and ratings.

4. Caching and State Management: To optimize performance and reduce unnecessary API calls, we implement caching mechanisms and use Zustand for state management. Cached data is used whenever possible, and the app checks for updates periodically to keep the information fresh.

5. Error Handling: We handle potential API request errors gracefully to ensure a smooth user experience. When the API encounters errors, the app displays appropriate messages to inform users of any issues.

import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
count: number;
next: string | null;
results: T[];
}

const axiosInstance = axios.create({
baseURL: "https://api.rawg.io/api",
params: {
key: "d465f132657a490fbef8cbbc9e7bb867",
},
});

class APIClient<T> {
endPoint: string;

constructor(endPoint: string) {
this.endPoint = endPoint;
}

// To get all items (games, posts, etc.)
getAll = (config: AxiosRequestConfig) => {
return axiosInstance
.get<FetchResponse<T>>(this.endPoint, config)
.then((res) => res.data);
};

// Create an item (post data)
post = (data: T) => {
return axiosInstance
.post<FetchResponse<T>>(this.endPoint, data)
.then((res) => res.data);
};

// Get a single item (game, post, etc.) by ID
get = (id: number | string) => {
return axiosInstance
.get<T>(`${this.endPoint}/${id}`)
.then((res) => res.data);
};
}

export default APIClient;

You can use this APIClient class in your project to interact with the RAWG API. To use it, you would create an instance of the class with the desired endpoint and then call its methods (e.g., getAll, post, get) to fetch data from the API.

Remember to replace "d465f132657a490fbef8cbbc9e7bb871" with your actual API key obtained from the RAWG API. Additionally, update the endPoint variable with the specific API endpoint you want to interact with (e.g., /games, /genres, etc.).

With this API client, you can seamlessly integrate the RAWG API into your project and fetch game data to power the Game Discoverer app's features.

By integrating the RAWG API, Game Discoverer offers users an extensive and dynamic collection of games to explore, making it a valuable resource for gaming enthusiasts.

**Contact**

If you have any questions, feedback, or suggestions regarding the Game Discoverer app, or if you'd like to report a bug or contribute to the project, please feel free to reach out to us. You can contact us through the following channels:

. Email: For general inquiries or collaboration opportunities, you can contact us via email at iidoko899@gmail.com.

. Twitter: Follow us on Twitter @Therealivii.
