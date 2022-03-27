import React from 'react';

export const CircularLoading = () => {
    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                <span className="visually-hidden"></span>
            </div>
        </div>
    )
};
