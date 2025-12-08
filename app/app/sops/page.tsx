"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  Plus,
  Star,
  Folder,
  Grid,
  List,
  MoreVertical,
  Edit,
  Trash2,
  Copy,
  Share2,
  FileText,
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import Badge from "@/components/ui/badge";
import { formatRelativeTime } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { useSOPs } from "@/hooks/useSOPs";

export default function SOPsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const { user, loading: authLoading } = useAuth();
  const { sops, loading: sopsLoading, deleteSOP } = useSOPs();

  // Get unique folders
  const folders = Array.from(new Set(sops.map(sop => sop.folder)));

  // Filter SOPs
  const filteredSOPs = sops.filter(sop => {
    const matchesSearch = sop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (sop.description && sop.description.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesFolder = !selectedFolder || 
                          (selectedFolder === 'favorites' && sop.is_favorite) ||
                          (selectedFolder !== 'favorites' && sop.folder === selectedFolder);
    return matchesSearch && matchesFolder;
  });

  // Show loading state
  if (authLoading || sopsLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading your SOPs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            SOP Library
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage and organize all your procedures
          </p>
        </motion.div>

        <div className="flex gap-3">
          <Link href="/app/sops/create">
            <Button variant="primary" className="group">
              <Plus className="mr-2 w-5 h-5" />
              Create SOP
            </Button>
          </Link>
          <Link href="/app/generate">
            <Button variant="outline" className="group">
              <Plus className="mr-2 w-5 h-5" />
              Generate from Video
            </Button>
          </Link>
        </div>
      </div>

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-6"
      >
        <Card>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <Input
                type="text"
                placeholder="Search SOPs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                icon={<Search className="w-5 h-5" />}
              />
            </div>

            {/* View Toggle */}
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>

      <div className="flex gap-6">
        {/* Folders Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-64 flex-shrink-0"
        >
          <Card>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Folders
            </h3>
            <div className="space-y-2">
              <button
                onClick={() => setSelectedFolder(null)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all ${
                  selectedFolder === null
                    ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span className="text-sm font-medium">All SOPs</span>
                <span className="ml-auto text-xs">{sops.length}</span>
              </button>
              
              <button
                onClick={() => setSelectedFolder('favorites')}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all ${
                  selectedFolder === 'favorites'
                    ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <Star className="w-4 h-4" />
                <span className="text-sm font-medium">Favorites</span>
                <span className="ml-auto text-xs">
                  {sops.filter(s => s.is_favorite).length}
                </span>
              </button>

              <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>

              {folders.map((folder) => (
                <button
                  key={folder}
                  onClick={() => setSelectedFolder(folder)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all ${
                    selectedFolder === folder
                      ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <Folder className="w-4 h-4" />
                  <span className="text-sm font-medium">{folder}</span>
                  <span className="ml-auto text-xs">
                    {sops.filter(s => s.folder === folder).length}
                  </span>
                </button>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* SOPs Grid/List */}
        <div className="flex-1">
          {filteredSOPs.length === 0 ? (
            <Card className="text-center py-12">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                No SOPs found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {searchQuery || selectedFolder ? 'Try adjusting your search or filters' : "You haven't created any SOPs yet"}
              </p>
              <Link href="/app/generate">
                <Button variant="primary">
                  <Plus className="mr-2 w-5 h-5" />
                  Create Your First SOP
                </Button>
              </Link>
            </Card>
          ) : (
            <>
              {viewMode === 'grid' ? (
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredSOPs.map((sop, index) => (
                    <motion.div
                      key={sop.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <Card hover className="h-full group relative">
                        <div className="absolute top-6 right-6 flex items-center space-x-2">
                          {sop.is_favorite && (
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                          )}
                          <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <MoreVertical className="w-5 h-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                          </button>
                        </div>

                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                          <FileText className="w-6 h-6 text-white" />
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 pr-16">
                          {sop.title}
                        </h3>

                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                          {sop.description || 'No description'}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="primary">{sop.folder}</Badge>
                          {sop.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="default">{tag}</Badge>
                          ))}
                          {sop.tags.length > 2 && (
                            <Badge variant="default">+{sop.tags.length - 2}</Badge>
                          )}
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                          <span>{sop.steps?.length || 0} steps</span>
                          <span>Updated {formatRelativeTime(sop.updated_at)}</span>
                        </div>

                        <Link href={`/app/sops/${sop.id}`}>
                          <Button variant="outline" className="w-full mt-4 group">
                            View SOP
                            <FileText className="ml-2 w-4 h-4" />
                          </Button>
                        </Link>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredSOPs.map((sop, index) => (
                    <motion.div
                      key={sop.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <Link href={`/app/sops/${sop.id}`}>
                        <Card hover className="group">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 flex-1">
                              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <FileText className="w-6 h-6 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-2 mb-1">
                                  <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate">
                                    {sop.title}
                                  </h3>
                                  {sop.is_favorite && (
                                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 flex-shrink-0" />
                                  )}
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 truncate mb-2">
                                  {sop.description || 'No description'}
                                </p>
                                <div className="flex items-center space-x-3">
                                  <Badge variant="primary">{sop.folder}</Badge>
                                  <span className="text-xs text-gray-500">{sop.steps?.length || 0} steps</span>
                                  <span className="text-xs text-gray-500">
                                    Updated {formatRelativeTime(sop.updated_at)}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
