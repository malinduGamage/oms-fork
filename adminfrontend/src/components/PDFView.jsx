import React, { useState, useEffect } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { toast } from 'react-hot-toast';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

export const PDFView = ({ documentUrl }) => {
    return (
        <div className="h-5/6 shadow-lg border  border-gray-300">
            {documentUrl ? (
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                    <Viewer fileUrl={documentUrl} />
                </Worker>

            ) : (
                <p>Loading document...</p>
            )}
        </div>
    );
};
