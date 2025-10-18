import { useState } from "react";
import { ChevronDown, ChevronUp, ChevronLeft } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface FilterSidebarProps {
  onClose: () => void;
  filters: {
    customizable: boolean;
    idealFor: string[];
  };
  onFilterChange: (filters: any) => void;
}

export const FilterSidebar = ({ onClose, filters, onFilterChange }: FilterSidebarProps) => {
  const [expandedSections, setExpandedSections] = useState({
    idealFor: true,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleIdealForChange = (value: string, checked: boolean) => {
    const newIdealFor = checked
      ? [...filters.idealFor, value]
      : filters.idealFor.filter(item => item !== value);
    
    onFilterChange({
      ...filters,
      idealFor: newIdealFor
    });
  };

  return (
    <aside className="w-64 border-r border-border bg-background p-6 overflow-y-auto">
      <div className="space-y-6">
        {/* Customizable */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="customizable"
              checked={filters.customizable}
              onCheckedChange={(checked) => 
                onFilterChange({ ...filters, customizable: checked })
              }
            />
            <Label htmlFor="customizable" className="text-sm font-medium cursor-pointer">
              CUSTOMIZABLE
            </Label>
          </div>
        </div>

        {/* Ideal For */}
        <div className="space-y-3">
          <button
            onClick={() => toggleSection('idealFor')}
            className="flex items-center justify-between w-full text-sm font-medium text-foreground"
          >
            <span>IDEAL FOR</span>
            {expandedSections.idealFor ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          
          {expandedSections.idealFor && (
            <div className="space-y-2 pl-1">
              <button className="text-xs text-muted-foreground hover:text-foreground">
                Unselect all
              </button>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="all"
                    checked={filters.idealFor.includes('all')}
                    onCheckedChange={(checked) => handleIdealForChange('all', checked as boolean)}
                  />
                  <Label htmlFor="all" className="text-sm cursor-pointer">All</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="men"
                    checked={filters.idealFor.includes('men')}
                    onCheckedChange={(checked) => handleIdealForChange('men', checked as boolean)}
                  />
                  <Label htmlFor="men" className="text-sm cursor-pointer">Men</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="women"
                    checked={filters.idealFor.includes('women')}
                    onCheckedChange={(checked) => handleIdealForChange('women', checked as boolean)}
                  />
                  <Label htmlFor="women" className="text-sm cursor-pointer">Women</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="baby-kids"
                    checked={filters.idealFor.includes('baby-kids')}
                    onCheckedChange={(checked) => handleIdealForChange('baby-kids', checked as boolean)}
                  />
                  <Label htmlFor="baby-kids" className="text-sm cursor-pointer">Baby & Kids</Label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Occasion */}
        <div className="space-y-3">
          <button
            onClick={() => toggleSection('occasion')}
            className="flex items-center justify-between w-full text-sm font-medium text-foreground"
          >
            <span>OCCASION</span>
            {expandedSections.occasion ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {expandedSections.occasion && (
            <div className="pl-1 text-sm text-muted-foreground">All</div>
          )}
        </div>

        {/* Work */}
        <div className="space-y-3">
          <button
            onClick={() => toggleSection('work')}
            className="flex items-center justify-between w-full text-sm font-medium text-foreground"
          >
            <span>WORK</span>
            {expandedSections.work ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {expandedSections.work && (
            <div className="pl-1 text-sm text-muted-foreground">All</div>
          )}
        </div>

        {/* Fabric */}
        <div className="space-y-3">
          <button
            onClick={() => toggleSection('fabric')}
            className="flex items-center justify-between w-full text-sm font-medium text-foreground"
          >
            <span>FABRIC</span>
            {expandedSections.fabric ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {expandedSections.fabric && (
            <div className="pl-1 text-sm text-muted-foreground">All</div>
          )}
        </div>

        {/* Segment */}
        <div className="space-y-3">
          <button
            onClick={() => toggleSection('segment')}
            className="flex items-center justify-between w-full text-sm font-medium text-foreground"
          >
            <span>SEGMENT</span>
            {expandedSections.segment ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {expandedSections.segment && (
            <div className="pl-1 text-sm text-muted-foreground">All</div>
          )}
        </div>

        {/* Suitable For */}
        <div className="space-y-3">
          <button
            onClick={() => toggleSection('suitableFor')}
            className="flex items-center justify-between w-full text-sm font-medium text-foreground"
          >
            <span>SUITABLE FOR</span>
            {expandedSections.suitableFor ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {expandedSections.suitableFor && (
            <div className="pl-1 text-sm text-muted-foreground">All</div>
          )}
        </div>
      </div>
    </aside>
  );
};
