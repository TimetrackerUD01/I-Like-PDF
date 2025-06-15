# Copilot Instructions for PDF Converter System

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a Next.js application for PDF file conversion and compression system for Khai Yai Subdistrict Administrative Organization (อบต.ข่าใหญ่). The system allows users to convert PDF files to various formats and compress files.

## Key Technologies
- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- pdf-lib for PDF manipulation
- JSZip for file compression
- Thai language support with Noto Sans Thai font

## Code Standards
- Use TypeScript for all files
- Follow Next.js App Router patterns
- Use Tailwind CSS for styling
- Implement proper error handling
- Use Thai language for UI text
- Maintain responsive design
- Include proper accessibility features

## File Structure
- `/src/app` - Next.js App Router pages and layouts
- `/src/components` - Reusable React components
- `/src/lib` - Utility functions and business logic
- `/src/types` - TypeScript type definitions
- `/uploads` - Temporary file storage (auto-cleanup)

## API Endpoints
- `POST /api/process` - Handle file upload and processing
- `GET /api/download/[filename]` - Download processed files

## Features to Implement
- PDF to Word/Excel/PowerPoint conversion
- PDF to image conversion
- File compression
- Drag and drop file upload
- Progress indicators
- File download with auto-cleanup
- Advertisement banners
- Mobile-responsive design
- Thai government styling

## Security Considerations
- File size limits (10MB)
- File type validation
- Secure file handling
- Auto-cleanup of temporary files
- Directory traversal protection

## Deployment
- Optimized for Render.com deployment
- 24/7 availability
- Environment variable configuration
- Production-ready build settings
