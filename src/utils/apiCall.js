export const getData = async (payload, url) => {
  //   const payload = {
  //     name: "John Doe",
  //     email: "john.doe@example.com",
  //     message: "Hello from React!",
  //   };

  try {
    const response = await fetch(url, {
      method: "POST", // HTTP method
      headers: {
        "Content-Type": "application/json", // Inform the server about JSON data
      },
      body: JSON.stringify(payload), // Convert JavaScript object to JSON
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json(); // Parse JSON response
    console.log("Success:", result);
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
};
