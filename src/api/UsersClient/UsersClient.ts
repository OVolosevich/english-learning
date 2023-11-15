const USERS_API_BASE_URL = 'http://localhost:3000/users';

class UsersApiClient {
  async registerUser (id: string): Promise<number> {
    const body = { id };
    const response = await fetch(USERS_API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return response.status;
  }
}

const usersApiClient = new UsersApiClient();

export default usersApiClient;
