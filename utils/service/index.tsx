const baseUrl = process.env.BASE_URL_API

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
