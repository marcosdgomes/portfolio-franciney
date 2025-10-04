"use client";

import React from 'react';
import { Share2, Facebook, Twitter, Linkedin, MessageCircle, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface SocialShareButtonsProps {
  postTitle: string;
  postUrl: string;
}

export function SocialShareButtonsEN({ postTitle, postUrl }: SocialShareButtonsProps) {
  const shareOnSocial = (platform: string) => {
    const url = encodeURIComponent(postUrl);
    const title = encodeURIComponent(postTitle);

    const shareUrls: { [key: string]: string } = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      whatsapp: `https://wa.me/?text=${title}%20${url}`,
      telegram: `https://t.me/share/url?url=${url}&text=${title}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  return (
    <Card className="mb-12 bg-muted/30 border-border">
      <CardContent className="p-6">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <span className="text-sm font-medium flex items-center gap-2">
            <Share2 className="h-4 w-4" />
            Share on:
          </span>
          <div className="flex gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => shareOnSocial('facebook')}
              className="hover:bg-muted transition-colors"
              title="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => shareOnSocial('twitter')}
              className="hover:bg-muted transition-colors"
              title="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => shareOnSocial('linkedin')}
              className="hover:bg-muted transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => shareOnSocial('whatsapp')}
              className="hover:bg-muted transition-colors"
              title="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => shareOnSocial('telegram')}
              className="hover:bg-muted transition-colors"
              title="Telegram"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
