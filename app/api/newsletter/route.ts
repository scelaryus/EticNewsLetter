import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

interface EmailEntry {
  email: string;
  id: string;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'emails.json');

async function ensureDataFile() {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true });
  }
  
  if (!existsSync(DATA_FILE)) {
    await writeFile(DATA_FILE, JSON.stringify([], null, 2));
  }
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
     return NextResponse.json(
     { error: 'INVALID_EMAIL' },
    { status: 400 }
  );
  }


    await ensureDataFile();
    
    // Read existing emails
    const fileContent = await readFile(DATA_FILE, 'utf-8');
    const emails: EmailEntry[] = JSON.parse(fileContent);
    
    // Check if email already exists
    const exists = emails.some(entry => entry.email === email);
    if (exists) {
      return NextResponse.json(
        { error: 'EMAIL_ALREADY_EXISTS' },
        { status: 409 }
      );
    }
    
    // Add new email
    const newEntry: EmailEntry = {
      email,
      id: Date.now().toString()
    };
    
    emails.push(newEntry);
    
    // Save to file
    await writeFile(DATA_FILE, JSON.stringify(emails, null, 2));
    
    return NextResponse.json(
      { message: 'Email registered successfully', data: newEntry },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Error saving email:', error);
    return NextResponse.json(
      { error: 'Failed to register email' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await ensureDataFile();
    
    const fileContent = await readFile(DATA_FILE, 'utf-8');
    const emails: EmailEntry[] = JSON.parse(fileContent);
    
    return NextResponse.json(
      { count: emails.length, emails },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error reading emails:', error);
    return NextResponse.json(
      { error: 'Failed to read emails' },
      { status: 500 }
    );
  }
} 