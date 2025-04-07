// Common Error Code:

async function fetchUser() {
  try {
    let response = fetch('https://jsonplaceholder.typicode.com/users/3'); // ❌ missing await 
    let user = await response.json(); // Looks fine but causes error

    alert(`User name is: ${user.name}`);
  } catch (error) {
    alert(`Error fetching user: ${error}`);
  }
}

fetchUser();

// Solution: Use await with fetch() as well

async function fetchUser() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users/3'); // ✅ fixed
    let user = await response.json();
    
    alert(`User name is: ${user.name}`);
  } catch (error) {
    alert(`Error fetching user: ${error}`);
  }
}

fetchUser();
