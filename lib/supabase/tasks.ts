/**
 * Task Database Functions
 * Create, read, update, and delete tasks
 */

import { supabase } from './client';

export interface Task {
  id: string;
  sop_id: string | null;
  user_id: string;
  title: string;
  assigned_to: string | null;
  assigned_to_email: string | null;
  due_date: string | null;
  status: string;
  priority: string;
  notes: string | null;
  created_at: string;
  completed_at: string | null;
}

/**
 * Create a new task
 */
export async function createTask(task: {
  sop_id?: string;
  title: string;
  assigned_to_email?: string;
  due_date?: string;
  priority?: string;
  notes?: string;
}) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return { success: false, error: 'Not authenticated' };
    }

    const { data, error } = await supabase
      .from('tasks')
      .insert({
        user_id: user.id,
        sop_id: task.sop_id || null,
        title: task.title,
        assigned_to_email: task.assigned_to_email || null,
        due_date: task.due_date || null,
        status: 'pending',
        priority: task.priority || 'medium',
        notes: task.notes || null,
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating task:', error);
      return { success: false, error: error.message };
    }

    return { success: true, task: data as Task };
  } catch (error: any) {
    console.error('Error creating task:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Get all tasks for the current user
 */
export async function getUserTasks() {
  try {
    const { data, error } = await supabase
      .from('tasks')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching tasks:', error);
      return [];
    }

    return data as Task[];
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return [];
  }
}

/**
 * Get all tasks for a specific user ID
 */
export async function getTasksByUserId(userId: string) {
  try {
    const { data, error } = await supabase
      .from('tasks')
      .select('*, sops(title)')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching tasks:', error);
      return { data: null, error };
    }

    // Transform data to include sop_title
    const transformedData = data?.map((task: any) => ({
      ...task,
      sop_title: task.sops?.title || null,
    }));

    return { data: transformedData, error: null };
  } catch (error: any) {
    console.error('Error fetching tasks:', error);
    return { data: null, error };
  }
}

/**
 * Get tasks for a specific SOP
 */
export async function getSOPTasks(sopId: string) {
  try {
    const { data, error } = await supabase
      .from('tasks')
      .select('*')
      .eq('sop_id', sopId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching SOP tasks:', error);
      return [];
    }

    return data as Task[];
  } catch (error) {
    console.error('Error fetching SOP tasks:', error);
    return [];
  }
}

/**
 * Update task status
 */
export async function updateTaskStatus(id: string, status: string) {
  try {
    const updates: any = { status };
    if (status === 'completed') {
      updates.completed_at = new Date().toISOString();
    } else {
      updates.completed_at = null;
    }

    const { data, error } = await supabase
      .from('tasks')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating task status:', error);
      return { data: null, error };
    }

    return { data, error: null };
  } catch (error: any) {
    console.error('Error updating task status:', error);
    return { data: null, error };
  }
}

/**
 * Update a task
 */
export async function updateTask(id: string, updates: Partial<Task>) {
  try {
    const { data, error } = await supabase
      .from('tasks')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating task:', error);
      return { success: false, error: error.message };
    }

    return { success: true, task: data as Task };
  } catch (error: any) {
    console.error('Error updating task:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Delete a task
 */
export async function deleteTask(id: string) {
  try {
    const { error } = await supabase
      .from('tasks')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting task:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error: any) {
    console.error('Error deleting task:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Mark task as completed
 */
export async function completeTask(id: string) {
  try {
    const { data, error } = await supabase
      .from('tasks')
      .update({
        status: 'completed',
        completed_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error completing task:', error);
      return { success: false, error: error.message };
    }

    return { success: true, task: data as Task };
  } catch (error: any) {
    console.error('Error completing task:', error);
    return { success: false, error: error.message };
  }
}

