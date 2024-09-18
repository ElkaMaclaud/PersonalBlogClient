import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./Store";

type IAuthorization = {
    email: string;
    password: string;
};
export type IResume = {
    name: string;
    file?: string;
    avatar: string;
    profession: string;
    description: string;
};
export type IPost = {
    _id: string;
    header: string;
    date: string;
    category: string;
    description: string;
};
export type IWorks = {
    _id: string;
    header: string;
    image: string;
    date: string;
    category: string;
    description: string;
};
export type IContact = {
    phone: number;
    website: string;
    adress: string;
    git: string;
    socialMedia: string;
};
export type IData = {
    resume: IResume;
    posts: IPost[];
    works: IWorks[];
};

export interface IInitialState {
    transition: boolean;
    success: boolean;
    message: string;
    token: string | null;
    showModal: boolean;
    user: IAuthorization;
    data: IData;
    contact?: IContact;
    page: "LOADING" | "COMPLICATED" | "LOGIN";
}
const state: IInitialState = {
    transition: false,
    success: false,
    message: "",
    token: localStorage.getItem("access_token"),
    showModal: false,
    user: { email: "", password: "" },
    data: {
        resume: {
            name: "",
            avatar: "",
            profession: "",
            description: "",
        },
        posts: [],
        works: [],
    },
    page: "LOADING",
};
export const REGISTR_USER = createAsyncThunk<
    { success: boolean; message: string },
    IAuthorization,
    {
        rejectValue: string;
    }
>("page/REGISTR_USER", async ({ email, password }, { rejectWithValue }) => {
    try {
        const response = await fetch(
            "https://personal-blog-server-nine.vercel.app/auth/registration",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            }
        );
        const data = await response.json();
        if (data.success) {
            return data;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        return rejectWithValue(`${error}`);
    }
});
export const AUTH_USER = createAsyncThunk<
    { success: boolean; message: string; token: string },
    IAuthorization,
    {
        rejectValue: string;
    }
>("page/AUTH_USER", async ({ email, password }, { rejectWithValue }) => {
    try {
        const response = await fetch(
            "https://personal-blog-server-nine.vercel.app/auth/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            }
        );
        const data = await response.json();
        if (data.token) {
            return data;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        return rejectWithValue(`${error}`);
    }
});
export const FETCH_ALL_DATA = createAsyncThunk<
    { success: boolean; message: string; data: IData },
    undefined,
    { rejectValue: string; state: RootState }
>("page/FETCH_ALL_DATA", async (_, { rejectWithValue, getState }) => {
    try {
        const response = await fetch(
            "https://personal-blog-server-nine.vercel.app/auth/getData",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${getState().page.token}`,
                },
            }
        );
        const data = await response.json();
        if (data.success) {
            return data;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        return rejectWithValue(`${error}`);
    }
});
export const FETCH_POSTS = createAsyncThunk<
    { success: boolean; message: string; data: IPost[] },
    undefined,
    { rejectValue: string; state: RootState }
>("page/FETCH_POSTS", async (_, { rejectWithValue, getState }) => {
    try {
        const response = await fetch(
            `https://personal-blog-server-nine.vercel.app/auth/getPosts`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${getState().page.token}`,
                },
            }
        );
        const data = await response.json();
        if (data.success) {
            return data;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        return rejectWithValue(`${error}`);
    }
});
export const FETCH_POST = createAsyncThunk<
    { success: boolean; message: string; data: IPost },
    string,
    { rejectValue: { message: string }; state: RootState }
>("page/FETCH_POST", async (postId, { rejectWithValue, getState }) => {
    try {
        const response = await fetch(
            `https://personal-blog-server-nine.vercel.app/auth/getPost/${postId}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${getState().page.token}`,
                },
            }
        );
        const data = await response.json();
        if (data.success) {
            return data;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        return rejectWithValue({
            message:
                error instanceof Error ? error.message : "Неизвестная ошибка",
        });
    }
});
export const FETCH_WORKS = createAsyncThunk<
    { success: boolean; message: string; data: IWorks[] },
    undefined,
    { rejectValue: string; state: RootState }
>("page/FETCH_WORKS", async (_, { rejectWithValue, getState }) => {
    try {
        const response = await fetch(
            `https://personal-blog-server-nine.vercel.app/auth/getWorks`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${getState().page.token}`,
                },
            }
        );
        const data = await response.json();
        if (data.success) {
            return data;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        return rejectWithValue(`${error}`);
    }
});
export const FETCH_WORK = createAsyncThunk<
    { success: boolean; message: string; data: IWorks },
    string,
    { rejectValue: { message: string }; state: RootState }
>("page/FETCH_WORK", async (workId, { rejectWithValue, getState }) => {
    try {
        const response = await fetch(
            `https://personal-blog-server-nine.vercel.app/auth/getWork/${workId}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${getState().page.token}`,
                },
            }
        );
        const data = await response.json();
        if (data.success) {
            return data;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        return rejectWithValue({
            message:
                error instanceof Error ? error.message : "Неизвестная ошибка",
        });
    }
});
export const FETCH_FILE = createAsyncThunk<
    any,
    undefined,
    { rejectValue: string; state: RootState }
>("page/FETCH_FILE", async (_, { rejectWithValue, getState }) => {
    try {
        const response = await fetch(
            "https://personal-blog-server-nine.vercel.app/auth/downloadResume",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${getState().page.token}`,
                },
            }
        );
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "ResumeJohn.doc";
        a.click();
    } catch (error) {
        return rejectWithValue(`${error}`);
    }
});
export const FETCH_CONTACT = createAsyncThunk<
    { success: boolean; message: string; data: IContact },
    undefined,
    { rejectValue: string; state: RootState }
>("page/FETCH_CONTACT", async (_, { rejectWithValue, getState }) => {
    try {
        const response = await fetch(
            `https://personal-blog-server-nine.vercel.app/auth/getContact`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${getState().page.token}`,
                },
            }
        );
        const data = await response.json();
        if (data.success) {
            return data;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        return rejectWithValue(`${error}`);
    }
});

const slice = createSlice({
    name: "Page",
    initialState: state,
    reducers: {
        SET_PAGE: (state, action) => {
            state.page = action.payload
        },
        SET_SHOWMODAL: (state, action) => {
            state.showModal = action.payload;
        },
        SET_USER_DATA: (state, action) => {
            state.transition = true;
            state.user = {
                email: action.payload.email,
                password: action.payload.password,
            };
        },
        SET_TRANSITION: (state, action) => {
            state.transition = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(REGISTR_USER.fulfilled, (state, action) => {
            return {
                ...state,
                success: true,
                message: action.payload.message,
                showModal: true,
            };
        });
        builder.addCase(REGISTR_USER.rejected, (state, action) => {
            return {
                ...state,
                success: false,
                message: action.payload as string,
                showModal: true,
            };
        });
        builder.addCase(AUTH_USER.fulfilled, (state, action) => {
            localStorage.setItem("access_token", action.payload.token);
            return {
                ...state,
                success: true,
                token: action.payload.token,
                message: "Success",
                showModal: true,
                page: "LOADING",
            };
        });
        builder.addCase(AUTH_USER.rejected, (state, action) => {
            return {
                ...state,
                success: false,
                message: action.payload as string,
                showModal: true,
                page: "LOGIN",
            };
        });
        builder.addCase(FETCH_ALL_DATA.fulfilled, (state, action) => {
            return {
                ...state,
                success: true,
                message: action.payload.message,
                showModal: true,
                data: {
                    resume: action.payload.data.resume || state.data.resume,
                    posts: action.payload.data.posts || [],
                    works: action.payload.data.works || [],
                },
                page: "COMPLICATED",
            };
        });
        builder.addCase(FETCH_ALL_DATA.rejected, (state, action) => {
            return {
                ...state,
                success: false,
                showModal: true,
                message: action.payload as string,
                page: "LOGIN",
            };
        });
        builder.addCase(FETCH_WORKS.fulfilled, (state, action) => {
            return {
                ...state,
                success: true,
                message: action.payload.message,
                showModal: true,
                data: {
                    ...state.data,
                    works: action.payload.data,
                },
            };
        });
        builder.addCase(FETCH_WORKS.rejected, (state, action) => {
            return {
                ...state,
                success: false,
                showModal: true,
                message: action.payload as string,
            };
        });
        builder.addCase(FETCH_POSTS.fulfilled, (state, action) => {
            return {
                ...state,
                success: true,
                message: action.payload.message,
                showModal: true,
                data: {
                    ...state.data,
                    posts: action.payload.data,
                },
            };
        });
        builder.addCase(FETCH_POSTS.rejected, (state, action) => {
            return {
                ...state,
                success: false,
                showModal: true,
                message: action.payload as string,
            };
        });
        builder.addCase(FETCH_CONTACT.fulfilled, (state, action) => {
            return {
                ...state,
                success: true,
                showModal: true,
                message: action.payload.message,
                contact: action.payload.data
            };
        });
    },
});

export const { SET_PAGE, SET_SHOWMODAL, SET_USER_DATA, SET_TRANSITION } = slice.actions;
export default slice.reducer;
