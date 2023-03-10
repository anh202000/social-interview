// const baseUrl = process.env.BASE_URL
// const baseUrl = 'https://api.supermomos-dev.com/'
const baseUrl = "https://640b032765d3a01f980d90bc.mockapi.io/interview/social";

export const getData = async (url: any, token: any) => {
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method: "GET",
        headers: {
            Authorization: token,
        },
    });

    const data = await res.json();
    return data;
};

export const postData = async (url: any, post: any, _token?: any) => {
    const res = await fetch(`${baseUrl}${url}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
    });

    const data = await res.json();
    return data;
};
