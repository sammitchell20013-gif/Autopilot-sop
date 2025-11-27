/**
 * Plan Limit Enforcement
 * Check if user has reached their plan limits
 */

import { SubscriptionPlan, getPlanLimits } from './subscriptions';

export interface PlanLimitCheck {
  allowed: boolean;
  limit: number;
  current: number;
  message?: string;
}

/**
 * Check if user can create a new SOP
 */
export function canCreateSOP(
  userPlan: SubscriptionPlan,
  currentSOPCount: number
): PlanLimitCheck {
  const limits = getPlanLimits(userPlan);
  const sopLimit = limits.sops;

  // -1 means unlimited
  if (sopLimit === -1) {
    return {
      allowed: true,
      limit: -1,
      current: currentSOPCount,
    };
  }

  // Check if under limit
  if (currentSOPCount < sopLimit) {
    return {
      allowed: true,
      limit: sopLimit,
      current: currentSOPCount,
    };
  }

  // Reached limit
  return {
    allowed: false,
    limit: sopLimit,
    current: currentSOPCount,
    message: `You've reached your plan limit of ${sopLimit} SOP${sopLimit !== 1 ? 's' : ''}. Upgrade to create more!`,
  };
}

/**
 * Check if user can create a new task
 */
export function canCreateTask(
  userPlan: SubscriptionPlan,
  currentTaskCount: number
): PlanLimitCheck {
  const limits = getPlanLimits(userPlan);
  const taskLimit = limits.tasks;

  if (taskLimit === -1) {
    return {
      allowed: true,
      limit: -1,
      current: currentTaskCount,
    };
  }

  if (currentTaskCount < taskLimit) {
    return {
      allowed: true,
      limit: taskLimit,
      current: currentTaskCount,
    };
  }

  return {
    allowed: false,
    limit: taskLimit,
    current: currentTaskCount,
    message: `You've reached your plan limit of ${taskLimit} tasks. Upgrade to create more!`,
  };
}

/**
 * Check if user can upload a video
 */
export function canUploadVideo(
  userPlan: SubscriptionPlan,
  currentVideoCount: number
): PlanLimitCheck {
  const limits = getPlanLimits(userPlan);
  const videoLimit = limits.video_uploads;

  if (videoLimit === -1) {
    return {
      allowed: true,
      limit: -1,
      current: currentVideoCount,
    };
  }

  // Free plan can't upload videos
  if (videoLimit === 0) {
    return {
      allowed: false,
      limit: 0,
      current: currentVideoCount,
      message: 'Video upload is not available on the free plan. Upgrade to Pro to generate SOPs from videos!',
    };
  }

  if (currentVideoCount < videoLimit) {
    return {
      allowed: true,
      limit: videoLimit,
      current: currentVideoCount,
    };
  }

  return {
    allowed: false,
    limit: videoLimit,
    current: currentVideoCount,
    message: `You've reached your monthly video limit of ${videoLimit}. Upgrade for unlimited videos!`,
  };
}

/**
 * Check if user can invite team members
 */
export function canInviteTeamMember(
  userPlan: SubscriptionPlan,
  currentTeamCount: number
): PlanLimitCheck {
  const limits = getPlanLimits(userPlan);
  const teamLimit = limits.team_members;

  if (teamLimit === -1) {
    return {
      allowed: true,
      limit: -1,
      current: currentTeamCount,
    };
  }

  if (currentTeamCount < teamLimit) {
    return {
      allowed: true,
      limit: teamLimit,
      current: currentTeamCount,
    };
  }

  return {
    allowed: false,
    limit: teamLimit,
    current: currentTeamCount,
    message: `You've reached your team member limit of ${teamLimit}. Upgrade to add more team members!`,
  };
}

