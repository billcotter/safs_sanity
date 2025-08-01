'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/safs-button';
import { Card } from '@/components/ui/card';
import {
  BarChart3,
  Building,
  Clock,
  Link,
  RefreshCw,
  Search,
  TrendingUp,
  Users,
} from 'lucide-react';
import { useEffect, useState } from 'react';

interface AnalyticsInsights {
  popularPeople?: Array<{ slug: string; views: number }>;
  popularVenues?: Array<{ slug: string; views: number }>;
  searchInsights?: {
    recentSearches: Array<{
      query: string;
      results: number;
      timestamp: string;
    }>;
    popularSearches: Array<{ query: string; count: number }>;
  };
  crossLinkPatterns?: {
    recentCrossLinks: Array<{
      from: string;
      to: string;
      type: string;
      timestamp: string;
    }>;
    popularLinkPatterns: Array<{ pattern: string; count: number }>;
  };
  performanceMetrics?: Array<{
    page: string;
    averageLoadTime: number;
    minLoadTime: number;
    maxLoadTime: number;
    sampleCount: number;
  }>;
  overview?: {
    totalEvents: number;
    uniqueSessions: number;
    eventTypes: Record<string, number>;
    dataPoints: number;
  };
}

export function AnalyticsDashboard() {
  const [insights, setInsights] = useState<AnalyticsInsights>({});
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<
    'overview' | 'people' | 'venues' | 'search' | 'performance'
  >('overview');

  const fetchInsights = async (type: string) => {
    try {
      const response = await fetch(`/api/analytics?type=${type}`);
      const data = await response.json();
      setInsights((prev) => ({ ...prev, [type]: data }));
    } catch (error) {
      console.error('Failed to fetch analytics insights:', error);
    }
  };

  useEffect(() => {
    const loadInitialData = async () => {
      setLoading(true);
      await Promise.all([
        fetchInsights('overview'),
        fetchInsights('popular-people'),
        fetchInsights('popular-venues'),
        fetchInsights('search-insights'),
        fetchInsights('performance-metrics'),
      ]);
      setLoading(false);
    };

    loadInitialData();
  }, []);

  const refreshData = () => {
    setLoading(true);
    fetchInsights(
      activeTab === 'overview'
        ? 'overview'
        : activeTab === 'people'
        ? 'popular-people'
        : activeTab === 'venues'
        ? 'popular-venues'
        : activeTab === 'search'
        ? 'search-insights'
        : 'performance-metrics'
    ).finally(() => setLoading(false));
  };

  if (loading) {
    return (
      <div className='flex items-center justify-center py-12'>
        <RefreshCw className='h-8 w-8 animate-spin text-ocean-blue' />
        <span className='ml-2 text-charcoal'>Loading analytics...</span>
      </div>
    );
  }

  return (
    <div className='space-y-6'>
      {/* Header */}
      <div className='flex items-center justify-between'>
        <div>
          <h2 className='text-2xl font-serif font-bold text-charcoal mb-2'>
            Analytics Dashboard
          </h2>
          <p className='text-charcoal/70'>
            Track user behavior and content performance
          </p>
        </div>
        <Button onClick={refreshData} variant='outline' size='sm'>
          <RefreshCw className='h-4 w-4 mr-2' />
          Refresh
        </Button>
      </div>

      {/* Tab Navigation */}
      <div className='flex gap-2 border-b border-charcoal/20'>
        {[
          { id: 'overview', label: 'Overview', icon: BarChart3 },
          { id: 'people', label: 'People', icon: Users },
          { id: 'venues', label: 'Venues', icon: Building },
          { id: 'search', label: 'Search', icon: Search },
          { id: 'performance', label: 'Performance', icon: Clock },
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id as any)}
            className={`flex items-center gap-2 px-4 py-2 border-b-2 transition-colors ${
              activeTab === id
                ? 'border-ocean-blue text-ocean-blue'
                : 'border-transparent text-charcoal/70 hover:text-charcoal'
            }`}
          >
            <Icon className='h-4 w-4' />
            {label}
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && insights.overview && (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          <Card className='p-4'>
            <div className='flex items-center gap-2'>
              <TrendingUp className='h-5 w-5 text-ocean-blue' />
              <span className='text-sm text-charcoal/70'>Total Events</span>
            </div>
            <p className='text-2xl font-bold text-charcoal mt-2'>
              {insights.overview.totalEvents}
            </p>
          </Card>

          <Card className='p-4'>
            <div className='flex items-center gap-2'>
              <Users className='h-5 w-5 text-ocean-blue' />
              <span className='text-sm text-charcoal/70'>Unique Sessions</span>
            </div>
            <p className='text-2xl font-bold text-charcoal mt-2'>
              {insights.overview.uniqueSessions}
            </p>
          </Card>

          <Card className='p-4'>
            <div className='flex items-center gap-2'>
              <Link className='h-5 w-5 text-ocean-blue' />
              <span className='text-sm text-charcoal/70'>Event Types</span>
            </div>
            <p className='text-2xl font-bold text-charcoal mt-2'>
              {Object.keys(insights.overview.eventTypes).length}
            </p>
          </Card>

          <Card className='p-4'>
            <div className='flex items-center gap-2'>
              <BarChart3 className='h-5 w-5 text-ocean-blue' />
              <span className='text-sm text-charcoal/70'>Data Points</span>
            </div>
            <p className='text-2xl font-bold text-charcoal mt-2'>
              {insights.overview.dataPoints}
            </p>
          </Card>
        </div>
      )}

      {/* People Tab */}
      {activeTab === 'people' && insights.popularPeople && (
        <div className='space-y-4'>
          <h3 className='text-lg font-semibold text-charcoal'>
            Most Viewed People
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {insights.popularPeople.map((person, index) => (
              <Card key={person.slug} className='p-4'>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='font-medium text-charcoal'>{person.slug}</p>
                    <p className='text-sm text-charcoal/70'>
                      {person.views} views
                    </p>
                  </div>
                  <Badge
                    variant='secondary'
                    className='bg-ocean-blue text-sandstone'
                  >
                    #{index + 1}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Venues Tab */}
      {activeTab === 'venues' && insights.popularVenues && (
        <div className='space-y-4'>
          <h3 className='text-lg font-semibold text-charcoal'>
            Most Viewed Venues
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {insights.popularVenues.map((venue, index) => (
              <Card key={venue.slug} className='p-4'>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='font-medium text-charcoal'>{venue.slug}</p>
                    <p className='text-sm text-charcoal/70'>
                      {venue.views} views
                    </p>
                  </div>
                  <Badge
                    variant='secondary'
                    className='bg-ocean-blue text-sandstone'
                  >
                    #{index + 1}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Search Tab */}
      {activeTab === 'search' && insights.searchInsights && (
        <div className='space-y-6'>
          <div>
            <h3 className='text-lg font-semibold text-charcoal mb-4'>
              Popular Searches
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {insights.searchInsights.popularSearches.map((search, index) => (
                <Card key={search.query} className='p-4'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <p className='font-medium text-charcoal'>
                        "{search.query}"
                      </p>
                      <p className='text-sm text-charcoal/70'>
                        {search.count} searches
                      </p>
                    </div>
                    <Badge
                      variant='secondary'
                      className='bg-ocean-blue text-sandstone'
                    >
                      #{index + 1}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-charcoal mb-4'>
              Recent Searches
            </h3>
            <div className='space-y-2'>
              {insights.searchInsights.recentSearches
                .slice(-10)
                .map((search, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-between p-3 bg-sandstone/50 rounded-lg'
                  >
                    <div>
                      <p className='font-medium text-charcoal'>
                        "{search.query}"
                      </p>
                      <p className='text-sm text-charcoal/70'>
                        {new Date(search.timestamp).toLocaleString()}
                      </p>
                    </div>
                    <Badge variant='outline'>{search.results} results</Badge>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* Performance Tab */}
      {activeTab === 'performance' && insights.performanceMetrics && (
        <div className='space-y-4'>
          <h3 className='text-lg font-semibold text-charcoal'>
            Page Load Performance
          </h3>
          <div className='space-y-4'>
            {insights.performanceMetrics.map((metric) => (
              <Card key={metric.page} className='p-4'>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='font-medium text-charcoal'>{metric.page}</p>
                    <p className='text-sm text-charcoal/70'>
                      Avg: {metric.averageLoadTime.toFixed(0)}ms
                    </p>
                  </div>
                  <div className='text-right'>
                    <Badge variant='outline' className='mb-1'>
                      {metric.sampleCount} samples
                    </Badge>
                    <p className='text-xs text-charcoal/70'>
                      {metric.minLoadTime}ms - {metric.maxLoadTime}ms
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
