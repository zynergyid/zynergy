"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import {
  addOns,
  type BusinessSegment,
  featureCatalog,
  featureCategories,
  featuresSection,
  includedInEveryPackage,
  segmentPresets,
} from "@/content/features";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/cn";
import { waLink } from "@/lib/wa";
import { CtaLink } from "@/components/ui/CtaLink";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { FeatureCard } from "@/components/features/FeatureCard";
import { syncSelectionUrl } from "@/components/features/selectionUrl";

interface FeatureExplorerProps {
  initialSelected?: string[];
  initialAddOns?: string[];
}

/** Tap-to-select feature picker; the "checkout" is a pre-filled WhatsApp message. */
export function FeatureExplorer({
  initialSelected = [],
  initialAddOns = [],
}: FeatureExplorerProps) {
  const [selected, setSelected] = useState<string[]>(initialSelected);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(initialAddOns);
  const [activePreset, setActivePreset] = useState<BusinessSegment | null>(null);

  const select = (values: string[], addOnValues: string[] = selectedAddOns) => {
    setSelected(values);
    setSelectedAddOns(addOnValues);
    syncSelectionUrl(values, addOnValues);
  };

  const toggle = (value: string) => {
    setActivePreset(null);
    select(
      selected.includes(value) ? selected.filter((v) => v !== value) : [...selected, value],
    );
  };

  const toggleAddOn = (value: string) => {
    select(
      selected,
      selectedAddOns.includes(value)
        ? selectedAddOns.filter((v) => v !== value)
        : [...selectedAddOns, value],
    );
  };

  const applyPreset = (segment: BusinessSegment) => {
    if (segment === activePreset) {
      setActivePreset(null);
      select([]);
      return;
    }
    setActivePreset(segment);
    select(featureCatalog.filter((f) => f.segments.includes(segment)).map((f) => f.value));
  };

  // Catalog order keeps the WhatsApp message readable regardless of click order.
  const selectedTitles = featureCatalog
    .filter((f) => selected.includes(f.value))
    .map((f) => f.title);
  const addOnLabels = addOns.items
    .filter((a) => selectedAddOns.includes(a.value))
    .map((a) => a.label);

  return (
    <div>
      <Reveal>
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          <span className="w-full text-center text-sm text-muted sm:w-auto">
            {featuresSection.presetLabel}
          </span>
          {segmentPresets.map((preset) => (
            <button
              key={preset.value}
              type="button"
              aria-pressed={activePreset === preset.value}
              onClick={() => applyPreset(preset.value)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors",
                activePreset === preset.value
                  ? "border-primary bg-primary text-white"
                  : "border-line bg-white text-muted hover:border-primary/40 hover:text-primary",
              )}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="space-y-10">
        {featureCategories.map((category) => (
          <div key={category.value}>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-muted">
              {category.label}
            </h3>
            {/* Carousel on mobile/tablet, grid on desktop */}
            <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
              {featureCatalog
                .filter((f) => f.category === category.value)
                .map((feature, index) => (
                  <Reveal
                    key={feature.value}
                    delay={index * 0.04}
                    className="w-64 shrink-0 snap-start sm:w-72 lg:w-auto"
                  >
                    <FeatureCard
                      feature={feature}
                      selected={selected.includes(feature.value)}
                      onToggle={toggle}
                    />
                  </Reveal>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Add-on jasa Creative & Marketing, ikut terkirim di pesan WhatsApp */}
      <Reveal>
        <div className="mt-12 rounded-3xl border border-line bg-surface-soft p-6 text-center sm:p-8">
          <p className="text-sm font-bold text-ink">{addOns.label}</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {addOns.items.map((addOn) => {
              const active = selectedAddOns.includes(addOn.value);
              return (
                <button
                  key={addOn.value}
                  type="button"
                  aria-pressed={active}
                  onClick={() => toggleAddOn(addOn.value)}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                    active
                      ? "border-primary bg-primary text-white"
                      : "border-line bg-white text-muted hover:border-primary/40 hover:text-primary",
                  )}
                >
                  {active ? <X className="size-3.5" /> : <Plus className="size-3.5" />}
                  {addOn.label}
                </button>
              );
            })}
          </div>
        </div>
      </Reveal>

      <p className="mt-10 text-center text-sm text-muted">
        <span className="font-semibold text-ink">{includedInEveryPackage.label}</span>{" "}
        {includedInEveryPackage.items.join(" · ")}
      </p>
      <p className="mt-3 text-center text-sm text-muted">
        {featuresSection.footerNote}{" "}
        <a
          href={waLink(siteConfig.waMessages.default)}
          data-umami-event="whatsapp"
          data-umami-event-place="fitur-atas"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-primary hover:underline"
        >
          Konsultasi gratis di sini
        </a>
      </p>

      {selected.length > 0 && (
        <div className="sticky bottom-4 z-40 mt-8 flex justify-center pe-16 sm:pe-0">
          <div className="flex items-center gap-3 rounded-2xl border border-line bg-white/95 py-2 pl-4 pr-2 shadow-xl backdrop-blur">
            <button
              type="button"
              aria-label="Kosongkan pilihan"
              onClick={() => {
                select([], []);
                setActivePreset(null);
              }}
              className="grid size-8 place-items-center rounded-full text-muted transition-colors hover:bg-surface-soft hover:text-ink"
            >
              <X className="size-4" />
            </button>
            <span className="text-sm font-semibold text-ink">
              {selected.length} fitur
              {selectedAddOns.length > 0 && ` + ${selectedAddOns.length} tambahan`}
            </span>
            <CtaLink
              track="whatsapp"
              place="fitur"
              href={waLink(
                siteConfig.waMessages.features(
                  selectedTitles.join(", "),
                  addOnLabels.length > 0 ? addOnLabels.join(", ") : undefined,
                ),
              )}
              variant="whatsapp"
              className="px-4 py-2.5"
            >
              <WhatsAppIcon className="size-4" />
              Kirim via WhatsApp
            </CtaLink>
          </div>
        </div>
      )}
    </div>
  );
}
